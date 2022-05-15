import { StyleSheet, Text, View } from "react-native";

import { createIconSetFromIcoMoon } from "@expo/vector-icons";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { typeColors } from "@constants/Colors";

import { IType } from "@interfaces/Pokemon";

interface Props {
  types: IType[] | null;
}

const TypeIcon = createIconSetFromIcoMoon(
  require("@assets/fonts/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const Types: React.FC<Props> = ({ types }) => {
  return (
    <View style={styles.container}>
      {types?.map((item: IType, index: number) => (
        <View
          key={index}
          style={{
            ...styles.type,
            backgroundColor: typeColors[item.type.name],
            shadowColor: typeColors[item.type.name],
          }}
        >
          <TypeIcon key={item.slot} name={item.type.name} color="#FFF" />
          <Text style={styles.text}>{item.type.name.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("77%"),
    alignSelf: "center",
    justifyContent: "space-evenly",
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
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
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
