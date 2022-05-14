import { StyleSheet, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/core";

import AntDesignIcon from "@expo/vector-icons/AntDesign";

interface Props {
  color: string;
}

const Header: React.FC<Props> = ({ color }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ ...styles.header, backgroundColor: color }}
      onPress={() => navigation.goBack()}
    >
      <AntDesignIcon name="arrowleft" size={hp("3.2%")} color="#FFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: hp("5.5%"),
    left: wp("4.5"),
    right: 10,
    height: hp("6%"),
    width: hp("6%"),
    borderRadius: 100,
    
  },
});

export default Header;
