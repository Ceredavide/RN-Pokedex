import React from "react"
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Text
} from "react-native"

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

interface Props{
    name: string;
    color: string;
    content: string;
    setContent: any;
}

const NavButton : React.FC<Props> = ({ name, color, content, setContent }) => {

    const active = name === content

    const styles = StyleSheet.create({
        button: {
            backgroundColor: active ? color : "transparent",
            alignItems: "center",
            justifyContent: "center",
            height: hp("4%"),
            width: wp("22%"),
            borderRadius: 20
        },
        buttonText: {
            color: active ? "white" : color,
            fontSize: hp("1.43%"),
            fontFamily: "Avenir-Book",
            textAlign: "center"
        }
    })

    return (
        <TouchableWithoutFeedback onPress={() => setContent(name)}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{name.toUpperCase()}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}



export default NavButton;