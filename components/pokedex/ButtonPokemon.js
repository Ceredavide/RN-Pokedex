import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import capitalizeString from "../../services/capitalizeString"

const ButtonPokemon = ({ name, index, navigation }) => {

  const imgUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`

  //TODO aggiungere 0 prima del numero se più piccolo di 100
  function renderNumber(index) {
    return `#${index}`;
  }
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate("Pokemon", { index: index, name: name })
      }
    >
      <Text style={styles.name}>{capitalizeString(name)}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.number}>{renderNumber(index + 1)}</Text>
        <Image
          style={styles.image}
          source={{ uri: imgUri }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: wp("30%"),
    width: wp("45%"),
    backgroundColor: "#a7aaad",
    borderRadius: 20,
    paddingTop: hp("2%"),
    paddingLeft: hp("2%"),
    marginBottom: hp("3%")
  },
  name: {
    color: "white",
    fontSize: hp("3%"),
    fontFamily: "Avenir-Medium"
  },
  number: {
    color: "white",
    marginTop: hp("1%"),
    fontFamily: "Avenir-Heavy"
  },
  image: { 
    height: hp("8%"),
   width: hp("8%"),
    marginLeft: wp("15%")
   }
});

export default ButtonPokemon;
