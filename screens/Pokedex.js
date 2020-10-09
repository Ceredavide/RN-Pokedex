import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import styled from "styled-components/native"

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";

import ButtonPokemon from "../components/pokedex/ButtonPokemon";

import pokedexList from "../constants/pokedexList"

const PokedexScreen = ({ navigation }) => {

    let pokedex = pokedexList["gen4"]

    const renderItem = ({ item, index }) => (
        <ButtonPokemon
            name={item.pokemon_species.name}
            index={index}
            url={item.pokemon_species.url}
            navigation={navigation}
        />
    )

    return (
        <SafeAreaView>
            <LinearGradient
                start={[0.1, 0.1]}
                colors={["#F0CB35", "#F66F71"]}
                style={styles.gradient}
            />
            <Header>
                <Ionicons
                    name="ios-arrow-round-back"
                    size={hp("5%")}
                    color="#FFF"
                    onPress={() => navigation.goBack()}
                />
                <Title>Pokedex</Title>
            </Header>
            <FlatList
                data={pokedex.pokemon_entries}
                numColumns={2}
                columnWrapperStyle={styles.flatList}
                renderItem={renderItem}
                keyExtractor={item => item.entry_number}
            />
        </SafeAreaView>
    );
}

const Header = styled.View`
    padding: ${hp("2%")}px
`;

const Title = styled.Text`
    margin-top: ${hp("1%")}px;
    font-size: ${hp("5%")}px;
    font-family: "Avenir-Heavy";
    color: #FFF
`;

const styles = StyleSheet.create({
    flatList: {
        justifyContent: "space-between",
        marginHorizontal: wp("3%"),
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: hp("100%"),
    }
});

export default PokedexScreen