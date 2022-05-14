/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Pokedex: {};
  Pokemon: {
    url: string;
  };
};

export type PokedexScreenNavProps = NativeStackScreenProps<RootStackParamList, "Pokedex">;
export type PokemonScreenNavProps = NativeStackScreenProps<RootStackParamList, "Pokemon">;
