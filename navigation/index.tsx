import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const { Navigator, Screen } = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Pokedex" component={PokedexScreen} />
        <Screen name="Pokemon" component={PokemonScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Stack;