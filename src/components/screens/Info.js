import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar, Title } from "react-native-paper";
import PokemonImage from "../PokemonImage";
import { capitalize } from "../../utils";

const Info = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View>
      <Title>{capitalize(pokemon.name)}</Title>
      <PokemonImage number={pokemon.pokemonInfo.id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Info;
