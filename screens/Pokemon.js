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

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";

import PokemonCard from "../components/pokemon/PokemonCard";

import useFetchPokemon from "../hooks/useFetchPokemon"

const PokemonScreen = ({ navigation }) => {
    const name = navigation.getParam("name");
    const index = navigation.getParam("index");

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`

    const { isLoading, pokemon } = useFetchPokemon(index + 1)

    const capitalizeLetter = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    console.log(pokemon)

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Ionicons
                    name="ios-arrow-round-back"
                    size={hp("5%")}
                    color="black"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>{capitalizeLetter(name)}</Text>
            </View>
            <Image
                style={styles.image}
                source={{ uri: imageUrl }}
            />
            {isLoading ? (
                <ActivityIndicator style={{ marginTop: hp("30%") }} />
            ) : (
                    <PokemonCard pokemon={pokemon} />
                )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    header: { padding: hp("2%") },
    title: {
        paddingLeft: wp("3%"),
        fontSize: hp("5%")
    },
    image: { height: hp("20%"), width: hp("20%") }
});

export default PokemonScreen