import React from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";
import { capitalize } from "../utils";

const PokemonStat = ({ stats }) => {
  const statColor = (stat) => {
    if (stat <= 0.3) return "red";
    else if (stat > 0.3 && stat < 0.6) return "orange";

    return "green";
  };
  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View style={styles.statContainer}>
          <Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
          <Text style={styles.statValue}>{stat.base_stat}</Text>
          <ProgressBar
            style={styles.statBar}
            progress={stat.base_stat / 255}
            color={statColor(stat.base_stat / 255)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginHorizontal: 10,
  },
  statName: {
    width: "30%",
  },
  statValue: {
    width: "8%",
  },
  statBar: {
    height: 15,
  },
});

export default PokemonStat;
