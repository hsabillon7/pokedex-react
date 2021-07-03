import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { fetchPokemons } from "../../api";
import CardList from "../shared/CardList";
import SearchPokemon from "../shared/SearchPokemon";
import { ActivityIndicator } from "react-native-paper";

const Home = ({ navigation }) => {
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    const response = await fetchPokemons();

    setPokemons(response);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchPokemon navigation={navigation} />
      {loading ? (
        <ActivityIndicator animating={loading} size="large" />
      ) : (
        <CardList pokemons={pokemons} navigation={navigation} />
      )}
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
