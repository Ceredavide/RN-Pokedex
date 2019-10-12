import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import ButtonHome from "../components/home/ButtonHome";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>React-Native Pokedex</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: hp("1%")
        }}
      >
        <ButtonHome text="Pokedex" color="#70CDB2" />
        <ButtonHome text="Moves" color="#EC7674" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ButtonHome text="Abilities" color="#6DA4DC" />
        <ButtonHome text="Items" color="#FACF60" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  text: {
    fontSize: hp("4%"),
    marginLeft: wp("3%"),
    marginBottom: hp("7%")
  }
});

export default HomeScreen;
