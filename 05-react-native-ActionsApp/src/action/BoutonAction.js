import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

/**
 * Le composant BoutonAction est paramétrable via son nom.
 *
 * Si le nom vaut 'Supprimer' alors le libellé du bouton sera 'Supprimer'.
 *
 * TODO 1. Modifier le code pour que le bouton soit configurable via son nom.
 *
 * TODO 2. Si l'action sur lequel s'applique ce bouton est terminé, alors appliquer le style 'termine' à l'élément <Text>
 *
 * TODO 3. Si le nom du bouton est 'Supprimer', alors appliquer le style 'supprimer' à l'élément <Text>
 *
 */
const BoutonAction = ({ nom, estGras, onClick }) => (
  <TouchableHighlight
    underlayColor="#efefef"
    style={styles.bouton}
    onPress={() => onClick(nom)}
  >
    <Text
      style={[
        styles.texte,
        nom === "Terminer" && styles.terminer,
        nom === "Supprimer" && styles.supprimer,
        estGras && styles.gras,
      ]}
    >
      {nom}
    </Text>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  bouton: {
    alignSelf: "flex-end",
    padding: 7,
    borderColor: "#ededed",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  texte: {
    color: "#666666",
  },
  terminer: {
    color: "green",
  },
  supprimer: {
    color: "rgba(175, 47, 47, 1)",
  },
  gras: {
    fontWeight: "bold",
  },
});
export default BoutonAction;
