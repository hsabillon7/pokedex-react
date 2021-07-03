import React from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";
import { capitalize } from "../../utils";
import theme from "../../theme";

const PokemonStat = ({ stats }) => {
  const statColor = (stat) => {
    if (stat <= 0.3) return theme.colors.statLow;
    else if (stat > 0.3 && stat < 0.6) return theme.colors.statMedium;

    return theme.colors.statHigh;
  };
  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <View key={index.toString()}>
          <View style={styles.statContainer}>
            <Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
            <Text style={styles.statValue}>{stat.base_stat}</Text>
          </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginHorizontal: 10,
  },
  statName: {
    width: "50%",
  },
  statValue: {
    width: "50%",
    textAlign: "right",
  },
  statBar: {
    marginHorizontal: 10,
    height: 15,
    marginBottom: 5,
  },
});

export default PokemonStat;
