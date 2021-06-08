import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import getEnvVars from "../../environment";

const { imageUrl } = getEnvVars();
const { width, height } = Dimensions.get("screen");

const Card = ({ name, number, otherInfo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image
        source={{
          uri: `${imageUrl}${number}.png`,
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
    alignSelf: "center",
  },
  image: {
    width: width * 0.8,
    height: height * 0.35,
  },
});

export default Card;
