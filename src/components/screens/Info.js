import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar, Title } from "react-native-paper";
import PokemonImage from "../PokemonImage";
import { capitalize } from "../../utils";
import PokemonStat from "../PokemonStat";

const Info = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Title>{capitalize(pokemon.name)}</Title>
      <PokemonImage number={pokemon.pokemonInfo.id} />
      <PokemonStat stats={pokemon.pokemonInfo.stats} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Info;
