import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  Text,
  Alert
} from "react-native";

import loadable from "@loadable/component";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";

const PokemonCard = loadable(() => import("../components/pokemon/PokemonCard"));

export default class PokemonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    this.fetchData(this.props.navigation.getParam("index"));
  };

  fetchData = async index => {
    try {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
        .then(res => res.json())
        .then(data => this.setState({ pkmnInfo: data, loading: false }));
    } catch (error) {
      this.setState({ loading: false });
      Alert.alert(error.toString());
    }
  };

  capitalizeLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    const { pkmnInfo, loading } = this.state;
    const { navigation } = this.props;

    const name = navigation.getParam("name");
    const index = navigation.getParam("index");

    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Ionicons
            name="ios-arrow-round-back"
            size={hp("5%")}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>{this.capitalizeLetter(name)}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
              1}.png`
          }}
        />
        {loading ? (
          <ActivityIndicator style={{ marginTop: hp("30%") }} />
        ) : (
          <PokemonCard pokemon={pkmnInfo} />
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
  image: { height: hp("20%"), width: hp("20%") }
});
