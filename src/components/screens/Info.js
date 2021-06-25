import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "react-native-paper";
import PokemonImage from "../PokemonImage";

const Info = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View>
      <Title>{pokemon.name}</Title>
      <PokemonImage number={pokemon.pokemonInfo.id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Info;
