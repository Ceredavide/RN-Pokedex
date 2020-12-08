import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { Ionicons } from "@expo/vector-icons";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

const Header = ({ navigation, title }) => {
    return (
        <View style={styles.header}>
            <Ionicons
                name="ios-arrow-round-back"
                size={hp("5%")}
                color="Black"
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: { padding: hp("1%") },
    title: {
        paddingLeft: wp("3%"),
        fontSize: hp("5%"),
        color: "white"
    },
})

export default Header