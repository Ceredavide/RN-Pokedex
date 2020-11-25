import React from "react"
import { StyleSheet, Text } from "react-native"

const Moves = ({ moves }) => {

    return moves.map((item, index) => {
        return <Text key={index}>{item.move.name}</Text>
    })
}

export default Moves