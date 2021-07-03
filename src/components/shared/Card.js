import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Badge, Card, Title } from "react-native-paper";
import PokemonImage from "./PokemonImage";
import theme from "../../theme";
import { capitalize, leftZeroPad } from "../../utils";
import PokemonType from "./PokemonType";

const { width } = Dimensions.get("screen");

const PokemonCard = ({ name, number, types }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <View style={styles.image}>
            <PokemonImage
              number={number}
              width={width * 0.35}
              height={width * 0.35}
            />
          </View>
          <View>
            <Text style={styles.number}>#{leftZeroPad(number)}</Text>
          </View>
        </View>
        <Title style={styles.title}>{capitalize(name)}</Title>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        {types.map((type, index) => (
          <PokemonType key={index.toString()} type={type} />
        ))}
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    marginTop: 10,
  },
  actions: {
    justifyContent: "center",
  },
  header: {
    position: "relative",
  },
  number: {
    fontSize: 140,
    textAlign: "center",
    fontWeight: "bold",
    color: theme.colors.number,
    zIndex: 0,
    marginTop: -40,
  },
  image: {
    flex: 1,
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    marginTop: 18,
  },
});

export default PokemonCard;
