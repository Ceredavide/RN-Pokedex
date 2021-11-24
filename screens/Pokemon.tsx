import React from "react";
import { ScrollView, StatusBar } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import styled from "styled-components/native";

import { LinearGradient } from "expo-linear-gradient";

import Error from "./Error";

import TransitionView from "../components/shared/TransitionView";
import Header from "../components/pokemon/Header";
import PokemonCard from "../components/pokemon/card";
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
  
    const firstType: string = pokemon!.types[0].type.name;

    const color: string = typeColors[firstType];

    return (
      <Screen color={color}  edges={['top']}>
        {pokemon!.types.length !== 1 &&
          <LinearGradient
          start={{ x: 0.4, y: 0.11 }}
          end={{ x: 0.1, y: 0.4 }}
          colors={pokemon!.types.map((item) => typeColors[item.type.name])}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: hp("100%"),
          }}
        />}
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Header index={index} pokemon={pokemon} navigation={navigation} /> */}
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
  background-color: ${(props: { color: string, forceInset: any }) => props.color};
`;

const Image = styled.Image`
  height: ${hp("30%")}px;
  width: ${hp("30%")}px;
  margin-top: -${hp("1.5%")}px;
  align-self: center;
`;

export default PokemonScreen;
