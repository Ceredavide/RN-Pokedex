import React from "react";

import { StyleSheet, View } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import NavBar from "./card/NavBar";
import Types from "./card/Types";

interface Props {
  pokemon: any,
  color: string
}

const PokemonCard: React.FC<Props> = ({ pokemon, color }) => {
  return (
    <View style={styles.card}>
      <Types types={pokemon.types} />
      <NavBar pokemon={pokemon} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: -hp("2%"),
    marginBottom: hp("3%"),
    padding: hp("2%"),
    borderRadius: 40,
    width: wp("100%"),
    minHeight: hp("55%"),
    alignSelf: "center",
    backgroundColor: "white",
  },
});

export default PokemonCard;
