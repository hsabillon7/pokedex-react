import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { fetchPokemons } from "../../api";
import CardList from "../CardList";

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
    <View>
      <CardList pokemons={pokemons} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
