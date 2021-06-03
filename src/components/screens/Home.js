import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchPokemons from "../../api";
import Card from "../Card";

const Home = () => {
  const [pokemons, setPokemons] = useState({});

  const getPokemons = async () => {
    const response = await fetchPokemons();

    setPokemons(response);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <View>
      <Text>Pokedex con React Native y PokeAPI</Text>
      {pokemons.count &&
        pokemons.results.map((pokemon) => {
          return <Card name={pokemon.name} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
