import { StyleSheet, ScrollView, View, StatusBar, Image } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { LinearGradient } from "expo-linear-gradient";

import Error from "@components/shared/Error";
import Loading from "@components/shared/Loading";
import TransitionView from "@components/shared/FadeInView";

import PokemonCard from "@components/pokemon";

import { typeColors } from "@constants/Colors";

import useFetchPokemon from "@hooks/useFetchPokemon";

import getImageUrl from "@utils/getImageUrl";

interface Props {
  route: any;
  navigation: any;
}

const PokemonScreen: React.FC<Props> = ({ route, navigation }) => {
  const { url } = route.params;

  const { isLoading, pokemon, error } = useFetchPokemon(url);

  if (isLoading) return <Loading />;
  else if (error) return <Error />;
  else {
    const firstType: string = pokemon!.types[0].type.name;

    const color: string = typeColors[firstType];

    return (
      <View
        style={{ ...styles.screen, backgroundColor: color }}
      >
        {pokemon!.types.length !== 1 && (
          <LinearGradient
            start={{ x: 1, y: 0.35 }}
            end={{ x: 0.1, y: 0.5 }}
            colors={pokemon!.types.map((item) => typeColors[item.type.name])}
            style={styles.gradient}
          />
        )}
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* TODO: Migliorare caricamento immagine */}
          <TransitionView>
            <Image
              source={{ uri: getImageUrl(url) }}
              onError={() => alert("Mielda")}
              style={styles.image}
            />
          </TransitionView>
          <PokemonCard pokemon={pokemon!} color={color} />
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("100%"),
  },
  image: {
    height: hp("27%"),
    width: hp("30%"),
    marginTop: -hp("1.5%"),
    alignSelf: "center",
  },
});

export default PokemonScreen;
