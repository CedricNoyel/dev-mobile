import React from "react";
import { View, Text } from "react-native";
import UneAction from "./UneAction";

const ListeActions = ({ actions, termineAction, supprimeAction }) => {
  return (
    <View>
      {actions &&
        actions.map((e) => (
          <UneAction
            key={e.id}
            action={e}
            termineAction={(action) => termineAction(action)}
            supprimeAction={(action) => supprimeAction(action)}
          ></UneAction>
        ))}
    </View>
  );
};

export default ListeActions;
