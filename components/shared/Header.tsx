import React from "react";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import styled from "styled-components/native";

interface Props {
  navigation: any;
  title: string;
}

const Header: React.FC<Props> = ({ navigation, title }) => {
  return (
    <Container>
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
