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
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{capitalizeString(pokemon.name)}</Text>
      <Types types={pokemon.types} />
      <Text style={styles.flavorText}>
        {pokemon.flavor_text_entries[6].flavor_text.replace(/\n/g, " ")}
      </Text>
      <NavBar pokemon={pokemon} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Avenir-Book",
    fontWeight:"500",
    fontSize: hp("4.4%"),
    textAlign: "center",
    color: "#4F4F4F",
    marginBottom: hp("1%"),
  },
  flavorText: {
    marginVertical: hp("1%"),
    height: hp("9%"),
    width: wp("80%"),
    fontSize: hp("1.8%"),
    fontFamily: "Avenir-Book",
    alignSelf: "center",
    textAlign: "justify",
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
