import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Title } from "react-native-paper";
import Card from "./Card";

const CardList = ({ pokemons, navigation }) => {
  const emptyFlatList = (
    <View style={styles.emptyList}>
      <Title>Pokemon data not found :(</Title>
    </View>
  );

  return (
    <FlatList
      data={pokemons.results}
      keyExtractor={(item) => item.pokemonInfo.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={emptyFlatList}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            key={item.pokemonInfo.id}
            onPress={() => {
              navigation.navigate("Info", { pokemon: item });
            }}
          >
            <Card
              name={item.name}
              number={item.pokemonInfo.id}
              types={item.pokemonInfo.types}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
});

export default CardList;
