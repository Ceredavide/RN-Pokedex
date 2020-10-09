import React from "react";

import styled from 'styled-components/native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import capitalizeString from "../../services/capitalizeString"
import getImageUrl from "../../services/getImageUrl"

const ButtonPokemon = ({ name, index, url, navigation }) => {

  const imgUri = getImageUrl(url)

  //TODO aggiungere 0 prima del numero se più piccolo di 100
  function renderNumber(index) {
    return `#${index}`;
  }

  function goToPokemon() {
    navigation.navigate("Pokemon", { index: index, name: name, url: url })
  }

  return (
    <Button onPress={goToPokemon}>
      <Name>{capitalizeString(name)}</Name>
      <Row>
        <Number>{renderNumber(index + 1)}</Number>
        <Image
          resizeMethod="scale"
          resizeMode="contain"
          source={{ uri: imgUri }}
        />
      </Row>
    </Button>
  );
};

const Row = styled.View`
  flex-direction: row
`;

const Button = styled.TouchableOpacity`
  height: ${hp("14%")}px;
  width: ${wp("45%")}px;
  background-color: #a7aaad;
  border-radius: 20px;
  padding-top: ${hp("2%")}px;
  padding-left: ${hp("2%")}px;
  margin-bottom: ${hp("3%")}px
`;

const Name = styled.Text`
  color: #FFF;
  font-size: ${hp("3%")}px;
  font-family: "Avenir-Medium"
`;

const Number = styled.Text`
  color: #FFF;
  margin-top: ${hp("1%")}px;
  font-family: "Avenir-Heavy"
`;

const Image = styled.Image`
  height: ${hp("8%")}px;
  width:${hp("8%")}px;
  margin-left:${wp("15%")}px;  
`;

export default ButtonPokemon;
