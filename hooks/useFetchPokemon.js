import { useState, useEffect } from "react"
import axios from "axios"

import handleError from "../services/handleError"

const useFetchPokemon = (index) => {
    const [isLoading, setIsloading] = useState(false)
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const fetchPokemon = async () => {
            setIsloading(true)
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
                setPokemon(response.data)
            } catch (error) {
                handleError(error)
            } finally {
                setIsloading(false)
            }
        }
        fetchPokemon()
    }, [])

    return { isLoading, pokemon }
}

export default useFetchPokemon