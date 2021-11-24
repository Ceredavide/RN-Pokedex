import React from "react";

import { StyleSheet, View, Text } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import Pokemon from "@models/Pokemon";

import NavBar from "./NavBar";
import Types from "./Types";

interface Props {
  pokemon: Pokemon | null,
  color: string
}

const PokemonCard: React.FC<Props> = ({ pokemon, color }) => {
  return (
    <View style={styles.card}>
      <Types types={pokemon!.types} />
      <NavBar pokemon={pokemon} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: -hp("2%"),
    padding: hp("2%"),
    borderRadius: 40,
    width: wp("100%"),
    minHeight: hp("55%"),
    alignSelf: "center",
    backgroundColor: "white",
  },
});

export default PokemonCard;
