import { StyleSheet, View ,TouchableOpacity, Image, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import capitalizeString from "@utils/capitalizeString";
import getImageUrl from "@utils/getImageUrl";

//TODO: migliorare interfaccia
interface Props {
  pokemon: any;
  navigation: any;
}

const ButtonPokemon: React.FC<Props> = ({
  pokemon,
  navigation: { navigate },
}) => {
  const {
    entry_number,
    pokemon_species: { name, url },
  } = pokemon;

  const imgUri = getImageUrl(url);

  function goToPokemon() {
    navigate("Pokemon", { index: entry_number, name: name, url: url });
  }

  return (
    <TouchableOpacity style={styles.button} onPress={goToPokemon}>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{capitalizeString(name)}</Text>
          <Text style={styles.number}>#{entry_number}</Text>
        </View>
        <Image
          resizeMethod="scale"
          resizeMode="contain"
          style={styles.image}
          source={{ uri: imgUri }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: hp("14%"),
    width: wp("90%"),
    backgroundColor: "#fff",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: hp("4%"),
    paddingRight: hp("3%"),
    marginBottom: hp("2%"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: hp("14%"),
    width: hp("14%"),
    borderRadius: 20,
  },
  name: {
    color: "#000",
    fontSize: hp("3%"),
    fontFamily: "Avenir-Medium",
  },
  number: {
    color: "#000",
    marginTop: hp("0.3%"),
    fontFamily: "Avenir-Heavy",
  },
});

export default ButtonPokemon;
