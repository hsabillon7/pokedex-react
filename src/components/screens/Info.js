import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Subheading, Text, Title } from "react-native-paper";
import PokemonImage from "../shared/PokemonImage";
import { capitalize, leftZeroPad } from "../../utils";
import PokemonStat from "../shared/PokemonStat";
import PokemonType from "../shared/PokemonType";
import theme from "../../theme";
import { decimiterToMeter, hectogramToPound } from "../../utils";

const { width } = Dimensions.get("screen");

const Info = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Title>{capitalize(pokemon.name)}</Title>
          <Text style={styles.number}>
            #{leftZeroPad(pokemon.pokemonInfo.id)}
          </Text>
        </View>
        <View style={styles.image}>
          <PokemonImage
            number={pokemon.pokemonInfo.id}
            width={width * 0.5}
            height={width * 0.5}
          />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          {decimiterToMeter(pokemon.pokemonInfo.height)}
        </Text>
        <Text style={styles.infoText}>
          {hectogramToPound(pokemon.pokemonInfo.weight)}
        </Text>
      </View>
      <View style={styles.types}>
        {pokemon.pokemonInfo.types.map((type, index) => (
          <PokemonType key={index.toString()} type={type} />
        ))}
      </View>
      <Subheading style={styles.stats}>Stats</Subheading>
      <PokemonStat stats={pokemon.pokemonInfo.stats} />
      <Subheading style={styles.stats}>Moves list</Subheading>
      <View style={styles.moves}>
        {pokemon.pokemonInfo.moves.map((move) => (
          <Text key={move.move.name} style={styles.move}>
            {move.move.name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  number: {
    fontSize: 18,
    marginTop: 5,
  },
  image: {
    alignSelf: "center",
  },
  types: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
  },
  infoText: {
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  stats: {
    fontWeight: "bold",
    paddingLeft: 10,
  },
  moves: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  move: {
    padding: 5,
    borderColor: theme.colors.number,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 5,
  },
});

export default Info;
