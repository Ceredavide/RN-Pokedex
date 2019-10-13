import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
  Alert
} from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default class PokemonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pkmnInfo: {}
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
        .then(data => {
          console.log(data);
          this.setState({ pkmnInfo: data, loading: false });
        });
    } catch (error) {
      this.setState({ loading: false });
      Alert.alert(error.toString());
    }
  };

  render() {
    const { pkmnInfo, loading } = this.state;

    return (
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator style={{ marginBottom: hp("50%") }} />
        ) : (
          <View>
            <Text>name: {pkmnInfo.name}</Text>
            <Text>weight: {pkmnInfo.weight/10} kg</Text>
            <Text>height: {pkmnInfo.height/10} meters</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
