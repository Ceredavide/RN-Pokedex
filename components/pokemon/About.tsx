import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import IPokemon, { IAbility } from "@interfaces/Pokemon";

interface Props {
  pokemon: IPokemon;
}

const About: React.FC<Props> = ({ pokemon }) => {
  return (
    <View style={styles.container}>
      <Row name="Weight" value={`${pokemon.weight / 10} Kg`} />
      <Row name="Height" value={`${pokemon.height / 10} Meters`} />
      <Row name="Species" value={pokemon.genera[7].genus} />
      <View style={{ ...styles.containerText }}>
        <Text style={styles.name}>Abilities:</Text>
        <View style={{ flexDirection: "row" }}>
          {pokemon.abilities.map((item: IAbility, index: number) => {
            return (
              <Text style={styles.value} key={index}>
                {item.ability.name}{" "}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

interface RowProps {
  name: string;
  value: string | number;
}

const Row: React.FC<RowProps> = ({ name, value }) => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.name}>{name}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  containerText: {
    justifyContent: "space-between",
    width: wp("70%"),
    marginTop: hp("2%"),
    flexDirection: "column",
  },
  name: {
    fontSize: hp("2%"),
    fontFamily: "Avenir-Medium",
    fontWeight: "bold",
  },
  value: {
    fontSize: hp("2%"),
    fontFamily: "Avenir-Medium",
  },
});

export default About;
