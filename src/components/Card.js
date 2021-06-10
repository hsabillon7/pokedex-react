import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import getEnvVars from "../../environment";

const { imageUrl } = getEnvVars();
const { width } = Dimensions.get("screen");

const Card = ({ name, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image
        source={{
          uri: `${imageUrl}${number}.png`,
        }}
        style={styles.image}
      />
      <Text># {number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderColor: "#000",
    borderWidth: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    // alignSelf: "center",
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: "contain",
  },
});

export default Card;
