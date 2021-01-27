import React from "react";
import { ScrollView, StatusBar } from "react-native";

import { SafeAreaView } from "react-navigation";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import styled from "styled-components/native";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import TransitionView from "../components/shared/TransitionView";
import PokemonCard from "../components/pokemon/PokemonCard";
import Loading from "../components/pokemon/Loading";

import useFetchPokemon from "../hooks/useFetchPokemon";
import getImageUrl from "../services/getImageUrl";
import capitalizeString from "../services/capitalizeString";

import typeColors from "../constants/colors";

interface Props {
  navigation: any;
}

const PokemonScreen: React.FC<Props> = ({ navigation }) => {

  const index: number = navigation.getParam("index");
  const url : string = navigation.getParam("url");

  const imageUrl = getImageUrl(url);

  const { isLoading, pokemon, error } = useFetchPokemon(url);

  if (isLoading) return <Loading />;
  else {
    const firstType = pokemon.types[0].type.name;

    const color = typeColors[firstType];

    return (
      <Screen color={color} forceInset={{ bottom: "never" }}>
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header>
            <Icon
              name="keyboard-arrow-left"
              size={hp("5%")}
              color="white"
              onPress={() => navigation.goBack()}
            />
            <Row>
              <Title>{capitalizeString(pokemon.name)}</Title>
              <Number>{`#${index + 1}`}</Number>
            </Row>
          </Header>
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

const Header = styled.View`
  padding: ${hp("1%")}px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  padding-left: ${wp("3%")}px;
  font-size: ${hp("5.5%")}px;
  font-family: "Avenir-Book";
  color: #fff;
`;

const Number = styled.Text`
  margin-right: ${wp("3%")}px;
  font-size: ${hp("3.5%")}px;
  font-weight: bold;
  color: #fff;
`;

const Image = styled.Image`
  height: ${hp("30%")}px;
  width: ${hp("30%")}px;
  margin-top: -${hp("1.5%")}px;
  align-self: center;
`;

export default PokemonScreen;
