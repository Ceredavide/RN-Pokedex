import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';

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
    <>
      <LinearGradient
        start={[1.1, 0.2]}
        end={[0.5, 0.5]}
        colors={["#00B2CA", "#1D4E89"]}
        style={styles.gradient}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }} edges={['top']} >
        <Header navigation={navigation} title="Pokedex" />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pokedex.pokemon_entries}
          renderItem={renderItem}
          keyExtractor={(item) => item.entry_number.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("100%"),
  },
});

export default PokedexScreen;
