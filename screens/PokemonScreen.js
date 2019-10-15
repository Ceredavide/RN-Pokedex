import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
  Alert
} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";

export default class PokemonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pkmnInfo: {
        types: []
      }
    };

    this.componentDidMount = () => {
      this.setState({ loading: true });
      this.fetchData(this.props.navigation.getParam("index"));
    };
  }

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

    const name = navigation.getParam('name')

    return (
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator style={{ marginBottom: hp("50%") }} />
        ) : (
          <View>
            <View style={styles.header}>
              <Ionicons
                name="ios-arrow-round-back"
                size={hp("5%")}
                color="black"
                onPress={() => navigation.goBack()}
              />
              <Text style={styles.title}>
                {this.capitalizeLetter(name)}
              </Text>
            </View>
            <Text>weight: {pkmnInfo.weight / 10} kg</Text>
            <Text>height: {pkmnInfo.height / 10} meters</Text>
            <Text>
              Types:
              {/* {console.log(pkmnInfo.types)} */}
              {pkmnInfo.types.map(item => {
                return <Text key={item.slot}>{item.type.name}</Text>;
              })}
            </Text>
          </View>
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
  }
});
