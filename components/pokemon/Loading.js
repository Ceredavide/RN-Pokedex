import React from "react"
import { StyleSheet, StatusBar, View, Image } from "react-native"

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

const Loading = () => {
    return (
        <View style={styles.screen}>
            <StatusBar hidden={true} />
            <Image 
            style={styles.image}
            source={require("../../assets/images/loadingPokemon.gif")}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    image: {
        height: hp("30%"),
        width: wp("80%")
    }
})

export default Loading