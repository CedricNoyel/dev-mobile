import React from "react";
import { View, StyleSheet } from "react-native";
import OptionMenu from "./OptionMenu";

/**
 * Composant Menu.
 */
const menuList = ["Toutes", "Actives", "Terminées"];

const Menu = ({ changeMenu }) => (
  <View style={styles.menu}>
    {menuList.map((menu, idx) => (
      <OptionMenu key={idx} title={menu} onClick={() => changeMenu(menu)} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  menu: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  selected: {
    color: "red",
  },
});
export default Menu;
