import React from "react"
import { StyleSheet, View } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import styled from "styled-components/native"

const About = ({ pokemon }) => {

    return (
        <Container>
            <Row name="Weight" value={`${pokemon.weight / 10} Kg`} />
            <Row name="Height" value={`${pokemon.height / 10} Meters`} />
            <Row name="Species" value={pokemon.genera[7].genus} />
            <View style={{ ...styles.containerText, flexDirection: "column" }}>
                <Name>Abilities:</Name>
                <View style={{ flexDirection: "row" }}>
                    {pokemon.abilities.map((item, index) => {
                        return (
                            <Value key={index}>{item.ability.name}  </Value>
                        )
                    })}
                </View>
            </View>
        </Container>
    )
}

const Row = ({ name, value }) => {
    return (
        <View style={styles.containerText}>
            <Name>{name}:</Name>
            <Value>{value}</Value>
        </View>
    )
}

const Container = styled.View`
    align-self: center
`;

const Name = styled.Text`
    font-size: ${hp("2%")}px;
    font-family: "Avenir-Medium";
    font-weight: bold
`;

const Value = styled.Text`
    font-size: ${hp("2%")}px;
    font-family: "Avenir-Medium";
`;

const styles = StyleSheet.create({
    containerText: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp("70%"),
        marginTop: hp("2%")
    }
})

export default About