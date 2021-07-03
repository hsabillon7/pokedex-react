import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../theme";

const PokemonType = ({ type }) => {
  return (
    <Text
      style={{ ...styles.badge, backgroundColor: theme.colors[type.type.name] }}
    >
      {type.type.name}
    </Text>
  );
};

const styles = StyleSheet.create({
  badge: {
    color: theme.colors.white,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default PokemonType;
