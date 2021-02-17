import React from "react";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import styled from "styled-components/native";

interface Props {
  navigation: any;
  title: string;
}

const Header: React.FC<Props> = ({ navigation, title }) => {
  return (
    <Container>
      <Icon
        name="arrow-left"
        size={hp("5%")}
        color="#FFF"
        onPress={() => navigation.goBack()}
      />
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.View`
  padding: ${hp("2%")}px;
`;

const Title = styled.Text`
  margin-top: ${hp("1%")}px;
  font-size: ${hp("5%")}px;
  font-family: "Avenir-Heavy";
  color: #fff;
`;

export default Header;
