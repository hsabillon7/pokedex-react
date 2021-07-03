import React from "react";
import { Image, StyleSheet, View } from "react-native";
import getEnvVars from "../../../environment";

const { imageUrl } = getEnvVars();

const PokemonImage = ({ number, width, height }) => {
  return (
    <View>
      <Image
        source={{
          uri: `${imageUrl}${number}.png`,
        }}
        style={{ ...styles.image, width, height }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
});

export default PokemonImage;
