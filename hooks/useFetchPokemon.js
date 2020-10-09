import { useState, useEffect } from "react"
import axios from "axios"

import handleError from "../services/handleError"

const useFetchPokemon = (url) => {
    const [isLoading, setIsloading] = useState(false)
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            setIsloading(true)
            try {
                
                const response1 = await axios.get(url)

                const response2 = await axios.get(response1.data.varieties[0].pokemon.url)

                // metto in ordine i tipi per i pokemon
                response2.data.types.sort((a, b) => { return a.slot - b.slot })

                setPokemon({ ...response1.data, ...response2.data })
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