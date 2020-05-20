import React, { useState } from "react";
import {
    StyleSheet,
    ScrollView,
    StatusBar,
    View,
    Image,
    Text,
} from "react-native";

import { SafeAreaView } from "react-navigation"

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";

import PokemonCard from "../components/pokemon/PokemonCard";
import Loading from "../components/pokemon/Loading"

import useFetchPokemon from "../hooks/useFetchPokemon"
import getImageUrl from "../services/getImageUrl"
import capitalizeString from "../services/capitalizeString";

import typeColors from "../constants/colors"

const PokemonScreen = ({ navigation }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const index = navigation.getParam("index");
    const url = navigation.getParam("url")

    const imageUrl = getImageUrl(url)

    const pokemon = useFetchPokemon(url)

    if (pokemon) {

        const firstType = pokemon.types[0].type.name

        const color = typeColors[firstType]

        return (
            <SafeAreaView style={{ ...styles.screen, backgroundColor: color }} forceInset={{ bottom: 'never' }}>
                <StatusBar barStyle="light-content" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ backgroundColor: color }}>
                        <View style={styles.header}>
                            <Ionicons
                                name="ios-arrow-round-back"
                                size={hp("5%")}
                                color="white"
                                onPress={() => navigation.goBack()}
                            />
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={styles.title}>{capitalizeString(pokemon.name)}</Text>
                                <Text style={styles.number}>{`#${index + 1}`}</Text>
                            </View>
                        </View>
                        <Image
                            style={{ ...styles.image, backgroundColor: color }}
                            source={{ uri: imageUrl }}
                        />
                    </View>
                    <PokemonCard pokemon={pokemon} color={color} />
                </ScrollView>
            </SafeAreaView>
        );
    }
    else {
        return <Loading />
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "red"
    },
    header: { padding: hp("1%") },
    title: {
        paddingLeft: wp("3%"),
        fontSize: hp("5.5%"),
        color: "white",
        fontFamily: "Avenir-Book"
    },
    number: {
        marginRight: wp("3%"),
        fontSize: hp("3.5%"),
        fontWeight: "bold",
        color: "white"
    },
    image: {
        marginTop: -hp("1.5%"),
        height: hp("30%"),
        width: hp("30%"),
        alignSelf: "center",
        backgroundColor: "red",
    }
});

export default PokemonScreen