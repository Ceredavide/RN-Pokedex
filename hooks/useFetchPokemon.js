import { useState, useEffect } from "react"
import axios from "axios"

import handleError from "../services/handleError"

const useFetchPokemon = (index) => {
    const [isLoading, setIsloading] = useState(false)
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            setIsloading(true)
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                setPokemon(response.data)
            } catch (error) {
                handleError(error)
            } finally {
                setIsloading(false)
            }
        }
        fetchPokemon()
    }, [])

    return pokemon
}

export default useFetchPokemon