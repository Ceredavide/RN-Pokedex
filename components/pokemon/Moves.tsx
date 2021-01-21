import React from "react";
import { Text, View } from "react-native";

interface Props {
  moves: any[];
}

const Moves: React.FC<Props> = ({ moves }) => {
  return (
    <View>
      {moves.map((item, index) => {
        return <Text key={index}>{item.move.name}</Text>;
      })}
    </View>
  );
};

export default Moves;
