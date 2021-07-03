import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Searchbar } from "react-native-paper";

const SearchPokemon = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search by name or number"
        value={search}
        onChangeText={setSearch}
        onIconPress={() => navigation.navigate("SearchResults", { search })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

export default SearchPokemon;
