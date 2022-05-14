import { StyleSheet, ScrollView, StatusBar, Image } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { LinearGradient } from "expo-linear-gradient";

import Error from "@components/shared/Error";
import Loading from "@components/shared/Loading";
import TransitionView from "@components/shared/FadeInView";

import PokemonCard from "@components/pokemon";

import { typeColors } from "@constants/Colors";
import { PokemonScreenNavProps } from "@navigation/types";

import useFetchPokemon from "@hooks/useFetchPokemon";

import getImageUrl from "@utils/getImageUrl";
import Header from "@components/pokemon/Header";

const PokemonScreen: React.FC<PokemonScreenNavProps> = ({ route }) => {
  const { url } = route.params;

  const { isLoading, pokemon, error } = useFetchPokemon(url);

  if (isLoading) return <Loading />;
  else if (error) return <Error />;
  else {
    const firstType: string = pokemon!.types[0].type.name;

    const mainColor: string = typeColors[firstType];

    const hasMultipleTypes: boolean = pokemon!.types.length !== 1;

    return (
      <>
        {hasMultipleTypes && (
          <LinearGradient
            start={{ x: 1, y: 0.35 }}
            end={{ x: 0.1, y: 0.5 }}
            colors={pokemon!.types.map((item) => typeColors[item.type.name])}
            style={styles.gradient}
          />
        )}
        <ScrollView
          style={{
            ...styles.screen,
            backgroundColor: hasMultipleTypes ? "transparent" : mainColor,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* TODO: Migliorare caricamento immagine */}
          <TransitionView>
            <Image
              source={{ uri: getImageUrl(url) }}
              onError={() => alert("Mielda")}
              style={styles.image}
            />
          </TransitionView>
          <PokemonCard pokemon={pokemon!} color={mainColor} />
        </ScrollView>
        <Header color={mainColor} />
      </>
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
    marginTop: hp("3.5%"),
    alignSelf: "center",
  },
});

export default PokemonScreen;
