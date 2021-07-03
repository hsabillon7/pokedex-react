import React from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";

const Favorite = ({ id }) => {
  const handleFavorite = async (id) => {
    // Obtener los pokemon favoritos
    const response = await AsyncStorage.getItem("favoritePokemon");
    let listOfPokemon = (await JSON.parse(response)) || [];

    console.log(listOfPokemon);

    listOfPokemon = [...listOfPokemon, id];

    // Almacenar el listado de manera persistente
    await AsyncStorage.setItem(
      "favoritePokemon",
      JSON.stringify(listOfPokemon)
    );
  };

  return <Button icon="star" />;
};

const styles = StyleSheet.create({});

export default Favorite;
