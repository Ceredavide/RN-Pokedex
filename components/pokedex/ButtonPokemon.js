import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ButtonPokemon = ({ name, index, navigation }) => {
  function capitalizeLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //TODO aggiungere 0 prima del numero se più piccollo di 100
  function renderNumber(index) {
    return `#${index}`;
  }
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: "#a7aaad" }}
      onPress={() =>
        navigation.navigate("Pokemon", { index: index, name: name })
      }
    >
      <Text style={styles.text}>{capitalizeLetter(name)}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.number}>{renderNumber(index + 1)}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
              1}.png`
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: wp("30%"),
    width: wp("45%"),
    borderRadius: 20,
    paddingTop: hp("2%"),
    paddingLeft: hp("2%"),
    marginBottom: hp("3%")
  },
  text: {
    color: "white",
    fontSize: hp("3%")
  },
  number: {
    color: "white",
    marginTop: hp("1%")
  },
  image: { height: hp("8%"), width: hp("8%"), marginLeft: wp("15%") }
});

export default ButtonPokemon;
