import { ReactElement, useState } from "react"
import { StyleSheet, View } from "react-native"

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import NavButton from "./NavButton"

import About from "./About"
// import Stats from "./Stats"

import Moves from "./Moves"
import IPokemon from "@interfaces/Pokemon";

interface Props {
    pokemon: IPokemon,
    color: string
}

const NavBar: React.FC<Props> = ({ pokemon, color }) => {
    const [content, setContent] = useState("about")

    return (
        <View>
            <View style={styles.navButtons}>
                <NavButton name="about" color={color} content={content} setContent={setContent} />
                {/* <NavButton name="stats" color={color} content={content} setContent={setContent} /> */}
                <NavButton name="evolutions" color={color} content={content} setContent={setContent} />
                <NavButton name="moves" color={color} content={content} setContent={setContent} />
            </View>
            {renderContent(content)}
        </View>
    )

    function renderContent(content: string): ReactElement {
        switch (content) {
            case "about":
                return <About pokemon={pokemon} />
            // case "stats":
            //     return <Stats stats={pokemon.stats} />
            case "moves":
                return <Moves moves={pokemon.moves} />
            default:
                return <View></View>
        }
    }
}

const styles = StyleSheet.create({
    navButtons: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: wp("100%"),
        paddingHorizontal: wp("2%")
    }
})

export default NavBar