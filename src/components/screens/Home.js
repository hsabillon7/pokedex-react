import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { fetchPokemons } from "../../api";
import CardList from "../CardList";
import SearchPokemon from "../SearchPokemon";

const Home = ({ navigation }) => {
  const [pokemons, setPokemons] = useState({});

  const getPokemons = async () => {
    const response = await fetchPokemons();

    setPokemons(response);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchPokemon navigation={navigation} />
      <CardList pokemons={pokemons} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});

export default Home;
