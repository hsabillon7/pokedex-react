import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PokemonImage from "../PokemonImage";

const Info = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View>
      <Text>{pokemon.name}</Text>
      <PokemonImage number={pokemon.pokemonInfo.id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Info;
