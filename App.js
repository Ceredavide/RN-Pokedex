import React, { useState } from "react"
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoadingScreen from "./screens/Loading"
import HomeScreen from "./screens/Home";
import PokedexScreen from "./screens/Pokedex";
import PokemonScreen from "./screens/Pokemon";

// TODO: aggiornare react-navigation
const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  return isLoading ? <LoadingScreen setIsLoading={setIsLoading} /> : <Stack />
}

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Pokedex: PokedexScreen,
    Pokemon: PokemonScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

const Stack = createAppContainer(StackNavigator)

export default App