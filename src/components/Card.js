import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Card = ({ name, image, otherInfo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`,
        }}
        style={styles.image}
      />
      <Text>{otherInfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default Card;
