import { ColorSchemeName } from "react-native";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";
import { RootStackParamList } from "./types";
// import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Navigator>
      <Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "Pokedex" }}
      />
      <Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ headerShown: false}}
      />
    </Navigator>
  );
}

// const PokedexOptions = ({route : }) =>  {
//   title:
// }
