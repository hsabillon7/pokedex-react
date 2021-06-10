import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchPokemons } from "../../api";
import CardList from "../CardList";

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
      <CardList pokemons={pokemons} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
