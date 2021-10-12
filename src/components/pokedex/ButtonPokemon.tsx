import React from "react";

import styled from "styled-components/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import capitalizeString from "../../services/capitalizeString";
import getImageUrl from "../../services/getImageUrl";

interface Props {
  name: string;
  index: number;
  url: string;
  navigation: any;
}

const ButtonPokemon: React.FC<Props> = ({ name, index, url, navigation }) => {
  const imgUri = getImageUrl(url);

  function renderNumber(index: number) {
    if (index < 100) {
      if (index < 10) {
        return `#00${index}`;
      }
      return `#0${index}`;
    } else {
      return `#${index}`;
    }
  }

  function goToPokemon() {
    navigation.navigate("Pokemon", { index: index, name: name, url: url });
  }

  return (
    <Button onPress={goToPokemon}>
      <Row>
        <Container>
          <Name>{capitalizeString(name)}</Name>
          <Number>{renderNumber(index + 1)}</Number>
        </Container>
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.View``;

const Button = styled.TouchableOpacity`
  height: ${hp("14%")}px;
  width: ${wp("90%")}px;
  background-color: #fff;
  border-radius: 20px;
  align-self: center;
  justify-content: center;
  padding-left: ${hp("2%")}px;
  margin-bottom: ${hp("2%")}px;
`;

const Name = styled.Text`
  color: #000;
  font-size: ${hp("3%")}px;
  font-family: "Avenir-Medium";
`;

const Number = styled.Text`
  color: #000;
  margin-top: ${hp("0.3%")}px;
  font-family: "Avenir-Heavy";
`;

const Image = styled.Image`
  height: ${hp("12%")}px;
  width: ${hp("12%")}px;
  margin-right: ${wp("5%")}px;
`;

export default ButtonPokemon;
