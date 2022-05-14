import { StyleSheet, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/core";

import AntDesignIcon from "@expo/vector-icons/AntDesign";

const Header: React.FC<any> = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
      <AntDesignIcon name="arrowleft" size={32} color="#FFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    top: hp("4.5%"),
    left: wp("3.5"),
    right: 10,
    height: 70,
    borderRadius: 100,
  },
});

export default Header;
