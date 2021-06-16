import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Card from "./Card";

const CardList = ({ pokemons, navigation }) => {
  return (
    <View>
      {pokemons.count &&
        pokemons.results.map((pokemon) => {
          return (
            <TouchableOpacity
              key={pokemon.pokemonInfo.id}
              onPress={() => {
                navigation.navigate("Info", { pokemon });
              }}
            >
              <Card
                name={pokemon.name}
                number={pokemon.pokemonInfo.id}
                types={pokemon.pokemonInfo.types}
              />
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CardList;
