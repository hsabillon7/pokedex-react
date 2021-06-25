import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Searchbar } from "react-native-paper";
import SearchResults from "./screens/SearchResults";

const SearchPokemon = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View>
      <Searchbar
        placeholder="Search pokemon by name or number"
        value={search}
        onChangeText={setSearch}
        onIconPress={() => navigation.navigate("SearchResults", { search })}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchPokemon;
