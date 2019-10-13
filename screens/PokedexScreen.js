import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  Alert
} from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

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

  fetchData = async () => {
    try {
      await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
        .then(res => res.json())
        .then(data =>
          this.setState({ pkmnList: data.results, loading: false })
        );
    } catch (error) {
      this.setState({ loading: false });
      Alert.alert(error.toString());
    }
  };

  render() {
    const {pkmnList, loading} = this.state

    return (
      <SafeAreaView>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator style={{ marginBottom: hp("50%") }} />
          ) : (
            <FlatList
              data={pkmnList}
              renderItem={({ item, index }) => (
                <ButtonPokemon
                  name={item.name}
                  index={index}
                  navigation={this.props.navigation}
                />
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
