import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Badge, Card } from "react-native-paper";
import PokemonImage from "./PokemonImage";
import theme from "../theme";
import { capitalize, leftZeroPad } from "../utils";

const { width } = Dimensions.get("screen");

const PokemonCard = ({ name, number, types }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={capitalize(name)} style={styles.title} />
      <Card.Content>
        <PokemonImage number={number} />
        <Text>#{leftZeroPad(number)}</Text>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        {types.map((type) => (
          <Badge
            key={type.type.name}
            size={25}
            style={{
              backgroundColor: theme.colors[type.type.name],
              marginRight: 2,
            }}
          >
            {type.type.name}
          </Badge>
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
    alignSelf: "center",
  },
  actions: {
    alignContent: "center",
  },
});

export default PokemonCard;
