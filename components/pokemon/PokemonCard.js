import React from "react";

import { StyleSheet, View, Text } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Types from "./Types"

const PokemonCard = ({ pokemon }) => {
  return (
    <View style={styles.card}>
      <Types types={pokemon.types} />
      <Text>weight: {pokemon.weight / 10} kg</Text>
      <Text>height: {pokemon.height / 10} meters</Text>
      <Text>base_experience: {pokemon.base_experience}</Text>
      <Text>abilities: {pokemon.abilities.map((item, index) => {
        return (
          <Text key={index}>{item.ability.name} </Text>
        )
      })}</Text>
      <Text>
        Stats:
         {pokemon.stats.map((item, index) => {
        return <Text key={index}>
          {item.stat.name}: {item.base_stat}
        </Text>
      })}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    marginTop: -hp("2%"),
    marginBottom: hp("3%"),
    padding: hp("2%"),
    borderRadius: 40,
    width: wp("100%"),
    height: hp("60%"),
    alignSelf: "center",
    backgroundColor: "white"
  }
});

export default PokemonCard