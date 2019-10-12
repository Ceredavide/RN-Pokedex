import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  Alert
} from "react-native";

import ButtonPokemon from "../components/pokedex/ButtonPokemon";

export default class PokedexScrenn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pkmnList: []
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    this.fetchData();
  };

  //   this.setState({data: data.results, loading: false})
  //   console.log(data.results)

  fetchData = async () => {
    try {
      await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
        .then(res => res.json())
        .then(data => {
          this.setState({ pkmnList: data.results, loading: false });
        });
    } catch (error) {
      this.setState({ loading: false });
      Alert.alert(error.toString());
    }
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={this.state.pkmnList}
              renderItem={({ item, index }) => (
                <ButtonPokemon name={item.name} index={index} />
              )}
              keyExtractor={item => item.url}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  }
});
