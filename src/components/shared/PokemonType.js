import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../theme";

const PokemonType = ({ type, showName = true }) => {
  const getIconUrl = (name) => {
    console.log(name);
    switch (name) {
      case "bug":
        return require("../../../assets/icons/bug.png");
      case "dark":
        return require("../../../assets/icons/dark.png");
      case "dragon":
        return require("../../../assets/icons/dragon.png");
      case "electric":
        return require("../../../assets/icons/electric.png");
      case "fairy":
        return require("../../../assets/icons/fairy.png");
      case "fighting":
        return require("../../../assets/icons/fighting.png");
      case "fire":
        return require("../../../assets/icons/fire.png");
      case "flying":
        return require("../../../assets/icons/flying.png");
      case "ghost":
        return require("../../../assets/icons/ghost.png");
      case "grass":
        return require("../../../assets/icons/grass.png");
      case "ground":
        return require("../../../assets/icons/ground.png");
      case "ice":
        return require("../../../assets/icons/ice.png");
      case "normal":
        return require("../../../assets/icons/normal.png");
      case "poison":
        return require("../../../assets/icons/poison.png");
      case "psychic":
        return require("../../../assets/icons/psychic.png");
      case "rock":
        return require("../../../assets/icons/rock.png");
      case "steel":
        return require("../../../assets/icons/steel.png");
      case "water":
        return require("../../../assets/icons/water.png");
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors[type.type.name],
      }}
    >
      <Image source={getIconUrl(type.type.name)} style={styles.icon} />
      {showName && <Text style={styles.badge}>{type.type.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    marginRight: 5,
  },
  badge: {
    color: theme.colors.white,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
  icon: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    resizeMode: "contain",
  },
});

export default PokemonType;
