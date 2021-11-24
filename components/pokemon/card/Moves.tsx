import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { Move } from "../../../models/Pokemon";

interface Props {
  moves: Move[];
}

const Moves: React.FC<Props> = ({ moves }) => {
  return (
    <View>
      {moves.map((item, index) => {

        const moveName: string = item.move.name.replaceAll('-', ' ');

        return (
          <View key={index} style={styles.type}>
            <Text style={styles.text}>
              {moveName}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  type: {
    padding: hp("2%"),
    borderBottomWidth: 1,
    borderBottomColor: "#d5d8dc"
  },
  text: {
    fontSize: hp("1.7%"),
    textTransform: 'capitalize',
    fontFamily: "Avenir-Medium"
  },
});

export default Moves;
