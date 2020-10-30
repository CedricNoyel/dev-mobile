import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Entete from "./src/Entete";
import Saisie from "./src/Saisie";
import BoutonCreer from "./src/BoutonCreer";
import ListeActions from "./src/action/ListeActions";
import Menu from "./src/menu/Menu";

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {
  // état global de l'application
  // il y aura probalement d'autres informations à stocker
  state = {
    texteSaisie: "",
    actions: [],
    menu: "Toutes",
  };

  /**
   * Méthode invoquée lorsque que la saisie change.
   *
   * @param nouvelleSaisie la valeur saisie
   */
  quandLaSaisieChange(nouvelleSaisie) {
    console.log("la saisie à changée", nouvelleSaisie);
    this.setState({
      texteSaisie: nouvelleSaisie.toString(),
    });
  }

  /**
   * Méthode invoquée lors du clic sur le bouton `Valider`.
   */
  validerNouvelleAction() {
    console.log("Vous avez cliqué sur Valider !");
    if (this.state.texteSaisie !== "") {
      let copyActions = [...this.state.actions];
      let maxActionId =
        copyActions.length === 0
          ? 0
          : copyActions[copyActions.length - 1].id + 1;
      copyActions.push({ id: maxActionId, title: this.state.texteSaisie });
      this.setState({ texteSaisie: "", actions: copyActions, isDone: false });
    }
  }

  changeMenu(menu) {
    this.setState({ menu: menu });
  }

  termineAction(action) {
    console.log("Termine l'action : ", action.title, " - id: ", action.id);

    action.isDone = !action.isDone;

    let copyActions = [...this.state.actions];
    let idxAction = copyActions.findIndex((e) => e.id === action.id);
    copyActions.splice(idxAction, 1, action);

    this.setState({ actions: copyActions });
  }

  supprimeAction(action) {
    console.log("Supprime l'action : ", action.title);

    let copyActions = [...this.state.actions];
    let mesActions = copyActions.filter((e) => e.id !== action.id);

    this.setState({ actions: mesActions });
  }

  render() {
    const { texteSaisie } = this.state;
    const { actions } = this.state;
    const { menu } = this.state;

    const activeTasks = actions.filter((e) => !e.isDone);
    const endedTasks = actions.filter((e) => e.isDone);

    return (
      <View style={styles.conteneur}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Entete />
          <Saisie
            texteSaisie={texteSaisie}
            evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}
          />
          <ListeActions
            actions={
              (menu === "Toutes" && actions) ||
              (menu === "Actives" && activeTasks) ||
              endedTasks
            }
            termineAction={(action) => this.termineAction(action)}
            supprimeAction={(action) => this.supprimeAction(action)}
          />
          <BoutonCreer onValider={() => this.validerNouvelleAction()} />
        </ScrollView>
        <Menu changeMenu={(menu) => this.changeMenu(menu)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
