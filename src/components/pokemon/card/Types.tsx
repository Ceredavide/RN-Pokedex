import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import typeColors from "../../../constants/colors";
import typeIcons from "../../../constants/icons";

interface Props {
  types: any[];
}

const Types: React.FC<Props> = ({ types }) => {
  return (
    <View style={styles.container}>
      {types.map((item) => 
        <Type
          key={item.slot}
          name={item.type.name}
          color={typeColors[item.type.name]}
        />
      )}
    </View>
  );
};

interface TypeProps {
  name: string;
  color: string;
}

const Type: React.FC<TypeProps> = ({ name, color }) => {
  return (
    <View style={{ ...styles.type, backgroundColor: color }}>
      {typeIcons[name]}
      <Text style={styles.text}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("70%"),
    alignSelf: "center",
    justifyContent: "space-evenly",
    padding: hp("1%"),
    flexDirection: "row",
  },
  type: {
    alignItems: "center",
    backgroundColor: "green",
    flexDirection: "row",
    height: hp("3.5%"),
    width: wp("30%"),
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 0.5,
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Avenir-Heavy",
    fontSize: hp("1.7%"),
    marginLeft: wp("1.5%"),
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
});

export default Types;
