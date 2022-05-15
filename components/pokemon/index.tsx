import { StyleSheet, View, Text } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import IPokemon from "@interfaces/Pokemon";

import capitalizeString from "@utils/capitalizeString";

import NavBar from "./NavBar";
import Types from "./Types";

interface Props {
  pokemon: IPokemon;
  color: string;
}

const PokemonCard: React.FC<Props> = ({ pokemon, color }) => {

  const flavorText = pokemon.flavor_text_entries[6].flavor_text.replace(/\s+/g, ' ').replace("POKéMON", "pokémon").trim();
  
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{capitalizeString(pokemon.name)}</Text>
      <Types types={pokemon.types} />
      <Text style={styles.flavorText}>{flavorText}</Text>
      <NavBar pokemon={pokemon} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Avenir-Book",
    fontWeight: "500",
    fontSize: hp("4.4%"),
    textAlign: "center",
    color: "#4F4F4F",
    marginBottom: hp("2%"),
  },
  flavorText: {
    paddingVertical: hp("3%"),
    width: wp("87.5%"),
    fontSize: hp("1.9%"),
    fontFamily: "Avenir-Book",
    textAlign: "center",
    alignSelf: "center"
  },
  card: {
    padding: hp("2%"),
    borderRadius: 40,
    width: wp("100%"),
    minHeight: hp("70%"),
    alignSelf: "center",
    backgroundColor: "white",
  },
});

export default PokemonCard;
