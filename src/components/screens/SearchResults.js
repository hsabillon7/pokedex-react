import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Title } from "react-native-paper";
import { searchPokemon } from "../../api";
import Card from "../Card";

const SearchResults = ({ route }) => {
  const { search } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const getPokemon = async () => {
    let result;

    if (search) result = await searchPokemon(search);

    if (!result) setError("Pokemon not found");

    setPokemon(result);
  };

  useEffect(() => {
    getPokemon();
  }, [search]);

  return (
    <View>
      {pokemon && error ? <ActivityIndicator size="large" /> : null}
      {pokemon ? (
        <Card name={pokemon.name} number={pokemon.id} types={pokemon.types} />
      ) : null}
      {error ? <Title>{error}</Title> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResults;
