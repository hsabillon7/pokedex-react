import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchPokemons from "../../api";

const Home = () => {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <View>
      <Text>Pokedex con React Native y PokeAPI</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
