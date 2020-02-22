import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
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

    const { isLoading, pokedex } = useFetchPokedex()

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Ionicons
                    name="ios-arrow-round-back"
                    size={hp("5%")}
                    color="black"
                    onPress={() => navigation.goBack()}
                />
            </View>
            {isLoading ? (
                <ActivityIndicator style={{ marginBottom: hp("50%") }} />
            ) : (
                    <FlatList
                        data={pokedex}
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


const styles = StyleSheet.create({
    header: { padding: hp("2%") },
    title: {
        paddingLeft: wp("3%"),
        fontSize: hp("5%")
    },
    flatList: {
        justifyContent: "space-between",
        marginHorizontal: wp("3%"),
    }
});

export default PokedexScreen