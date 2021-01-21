import React, { useState } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import AppLoading from "expo-app-loading";

import HomeScreen from "./screens/Home";
import PokedexScreen from "./screens/Pokedex";
import PokemonScreen from "./screens/Pokemon";

import loadResourcesAsync from "./services/loadResourcesAsync";

// TODO: aggiornare react-navigation
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={console.error}
        onFinish={() => setIsLoading(false)}
      />
    );
  }

  return <Stack />;
};

const Stack = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Pokedex: PokedexScreen,
      Pokemon: PokemonScreen,
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerShown: false,
      },
    }
  )
);

export default App;
