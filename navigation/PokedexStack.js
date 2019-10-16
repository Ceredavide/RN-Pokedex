import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const PokedexStack = createStackNavigator(
  {
    Home: HomeScreen,
    Pokedex: PokedexScreen,
    Pokemon: PokemonScreen
  },
  {
    initialRouteName: "Pokedex",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(PokedexStack);
