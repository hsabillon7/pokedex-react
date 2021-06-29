import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/theme";
import Home from "./src/components/screens/Home";
import Info from "./src/components/screens/Info";
import SearchResults from "./src/components/screens/SearchResults";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen
            name="SearchResults"
            component={SearchResults}
            options={{ title: "Search results" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
