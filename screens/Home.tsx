import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ButtonHome from "../components/home/ButtonHome";

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>React-Native Pokedex</Text>
      <View style={styles.containerButtons}>
        <ButtonHome text="Pokedex" color="#70CDB2" navigation={navigation} />
        <ButtonHome text="Moves" color="#EC7674" navigation={navigation} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ButtonHome text="Abilities" color="#6DA4DC" navigation={navigation} />
        <ButtonHome text="Items" color="#FACF60" navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 5,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("1%"),
  },
  text: {
    fontSize: hp("4%"),
    marginLeft: wp("3%"),
    marginVertical: hp("5%"),
  },
});

export default HomeScreen;
