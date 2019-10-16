import React from "react";

import { StyleSheet, View, Text } from "react-native";

export default class PokemonCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loading: false,
        }
    }



  render() {
    const { pokemon } = this.props;

    return (
      <View>
        <Text>weight: {pokemon.weight / 10} kg</Text>
        <Text>height: {pokemon.height / 10} meters</Text>
        <Text>
          Types:
          {pokemon.types.map(item => {
            return <Text key={item.slot}>{item.type.name}</Text>;
          })}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
