import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Alert
} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";

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
    const { pkmnList, loading } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Ionicons
            name="ios-arrow-round-back"
            size={hp("5%")}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Pokedex</Text>
        </View>
        {loading ? (
          <ActivityIndicator style={{ marginBottom: hp("50%") }} />
        ) : (
          <FlatList
            data={pkmnList}
            numColumns={2}
            columnWrapperStyle={styles.flatList}
            renderItem={({ item, index }) => (
              <ButtonPokemon
                name={item.name}
                index={index}
                navigation={navigation}
              />
            )}
            keyExtractor={item => item.url}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: { padding: hp("2%") },
  title: {
    paddingLeft: wp("3%"),
    fontSize: hp("5%")
  },
  flatList: {
    justifyContent: "space-between",
    marginLeft: wp("3%"),
    marginRight: wp("3%")
  }
});
