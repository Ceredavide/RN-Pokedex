import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ActivityIndicator,
    FlatList,
} from "react-native";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";

import ButtonPokemon from "../components/pokedex/ButtonPokemon";

import useFetchPokedex from "../hooks/useFetchPokedex"

const PokedexScreen = ({ navigation }) => {

    const { isLoading, pokedex } = useFetchPokedex(0, 20)

    const renderItem = ({ item, index }) => (
        <ButtonPokemon
            name={item.name}
            index={index}
            navigation={navigation}
        />
    )

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
            {isLoading ? (
                <ActivityIndicator style={{ marginBottom: hp("50%") }} />
            ) : (
                    <FlatList
                        data={pokedex}
                        numColumns={2}
                        columnWrapperStyle={styles.flatList}
                        renderItem={renderItem}
                        keyExtractor={item => item.url}
                    />
                )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    header: { padding: hp("2%") },
    title: {
        marginTop: hp("1%"),
        fontSize: hp("4%"),
        fontFamily: "Avenir-Heavy"
    },
    flatList: {
        justifyContent: "space-between",
        marginHorizontal: wp("3%"),
    }
});

export default PokedexScreen