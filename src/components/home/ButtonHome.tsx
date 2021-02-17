import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  text: string;
  color: string;
  navigation: any;
}

const ButtonHome: React.FC<Props> = ({ text, color, navigation }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      onPress={() => navigation.navigate(text)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: wp("17%"),
    width: wp("48%"),
    borderRadius: 20,
    paddingTop: hp("2%"),
    paddingLeft: hp("2%"),
  },
  text: {
    color: "white",
    fontSize: hp("3%"),
  },
});

export default ButtonHome;
