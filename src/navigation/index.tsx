import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "../screens/Home";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const { Navigator, Screen } = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator headerMode="none">
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Pokedex" component={PokedexScreen} />
          <Screen name="Pokemon" component={PokemonScreen} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Stack;
