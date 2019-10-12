import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ButtonPokemon = ({ name, index }) => {
  function capitalizeLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: "#a7aaad" }}>
      <Text style={styles.text}>{capitalizeLetter(name)}</Text>
      <Image
        style={{ height: hp("8%"), width: hp("8%") }}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: wp("30%"),
    width: wp("48%"),
    borderRadius: 20,
    paddingTop: hp("2%"),
    paddingLeft: hp("2%"),
    marginBottom: hp("3%")
  },
  text: {
    color: "white",
    fontSize: hp("3%")
  }
});

export default ButtonPokemon;
