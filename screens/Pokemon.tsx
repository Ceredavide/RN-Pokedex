import React from "react";
import { ScrollView, StatusBar, SafeAreaView } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import styled from "styled-components/native";

import Error from "./Error";

import TransitionView from "../components/shared/TransitionView";
import Header from "../components/pokemon/Header";
import PokemonCard from "../components/pokemon/Card";
import Loading from "../components/pokemon/Loading";

import useFetchPokemon from "../hooks/useFetchPokemon";
import getImageUrl from "../services/getImageUrl";

import typeColors from "../constants/colors";

interface Props {
  route: any;
  navigation: any;
}

const PokemonScreen: React.FC<Props> = ({ route, navigation }) => {
  const { index, url } = route.params;

  const imageUrl = getImageUrl(url);

  const { isLoading, pokemon, error } = useFetchPokemon(url);

  if (isLoading) return <Loading />;
  else if (error) return <Error />;
  else {
    
    const firstType = pokemon.types[0].type.name;

    const color = typeColors[firstType];

    return (
      <Screen color={color} forceInset={{ bottom: "never" }}>
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header index={index} pokemon={pokemon} navigation={navigation} />
          <TransitionView>
            <Image source={{ uri: imageUrl }} />
          </TransitionView>
          <PokemonCard pokemon={pokemon} color={color} />
        </ScrollView>
      </Screen>
    );
  }
};

const Screen = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props: any) => props.color};
`;

const Image = styled.Image`
  height: ${hp("30%")}px;
  width: ${hp("30%")}px;
  margin-top: -${hp("1.5%")}px;
  align-self: center;
`;

export default PokemonScreen;
