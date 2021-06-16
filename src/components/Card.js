import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PokemonImage from "./PokemonImage";

const { width } = Dimensions.get("screen");

const Card = ({ name, number, types }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <PokemonImage number={number} />
      <Text># {number}</Text>
      {types.map((type, index) => (
        <Text key={index}>{type.type.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderColor: "#000",
    borderWidth: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    // alignSelf: "center",
  },
});

export default Card;
