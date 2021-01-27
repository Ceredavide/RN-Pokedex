import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import styled from "styled-components/native";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import capitalizeString from "../../services/capitalizeString";

interface Props {
  index: number;
  pokemon: any;
  navigation: any;
}

const Header: React.FC<Props> = ({ index, pokemon, navigation }) => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.View`
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

export default Header;
