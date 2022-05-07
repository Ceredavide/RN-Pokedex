import { StyleSheet, FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { LinearGradient } from "expo-linear-gradient";

import ButtonPokemon from "../components/pokedex/ButtonPokemon";

import pokedex from "@constants/pokedex";

//TODO: migliorare Props
interface Props {
  navigation: any;
}

const PokedexScreen: React.FC<Props> = ({ navigation }) => {
  const selectedPokedex = pokedex["gen1"];

  //TODO: migliorare interface
  interface Item {
    item: any;
  }

  const renderItem = ({ item }: Item) => (
    <ButtonPokemon pokemon={item} navigation={navigation} />
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "transparent" }}
      edges={["top"]}
    >
      <LinearGradient
        start={[1.1, 0.2]}
        end={[0.5, 0.5]}
        colors={["#00B2CA", "#1D4E89"]}
        style={styles.gradient}
      />
      <FlatList
        data={selectedPokedex.pokemon_entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.entry_number.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
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
