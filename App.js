import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./screens/Home";
import PokedexScreen from "./screens/Pokedex";
import PokemonScreen from "./screens/Pokemon";

const App = createStackNavigator(
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

export default createAppContainer(App);