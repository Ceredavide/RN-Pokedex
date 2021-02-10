import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { LinearGradient } from "expo-linear-gradient";

import Header from "../components/shared/Header";
import ButtonPokemon from "../components/pokedex/ButtonPokemon";

import pokedexList from "../constants/pokedexList";

interface Props {
  navigation: any;
}

const PokedexScreen: React.FC<Props> = ({ navigation }) => {
  
  let pokedex = pokedexList["gen1"];

  interface Item {
    item: any;
    index: number;
  }

  const renderItem = ({ item, index }: Item) => (
    <ButtonPokemon
      name={item.pokemon_species.name}
      index={index}
      url={item.pokemon_species.url}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView>
      <LinearGradient
        start={[0.1, 0.1]}
        colors={["#F0CB35", "#F66F71"]}
        style={styles.gradient}
      />
      <Header navigation={navigation} title="Pokedex" />
      <FlatList
        data={pokedex.pokemon_entries}
        numColumns={2}
        columnWrapperStyle={styles.flatList}
        renderItem={renderItem}
        keyExtractor={(item) => item.entry_number}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    justifyContent: "space-between",
    marginHorizontal: wp("3%"),
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("100%"),
  },
});

export default PokedexScreen;
