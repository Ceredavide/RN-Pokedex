import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface Props {
  pokemon: any;
}

const Stats: React.FC<Props> = ({ pokemon }) => {
  return (
    <View style={{ flex: 1, width: wp("100 %"), flexDirection: "row" }}>
      {pokemon.stats.map((item: Object, index: number) => (
        <Stat key={index} item={item} />
      ))}
    </View>
  );
};

interface StatProps{
    item: any
}

const Stat: React.FC<StatProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.value}>{item.base_stat}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.name}>{item.stat.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: 80,
    height: 20,
    margin: 5,
  },
  stat: {},
  value: {
    fontFamily: "Avenir-Book",
    fontSize: hp("2%"),
  },
  name: {
    fontFamily: "Avenir-Book",
    fontSize: hp("1.5%"),
  },
});

export default Stats;
