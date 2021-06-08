import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";

const CardList = ({ pokemons }) => {
  return (
    <View>
      {pokemons.count &&
        pokemons.results.map((pokemon, index) => {
          return <Card key={index} name={pokemon.name} number={index + 1} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CardList;
