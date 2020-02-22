import { useState, useEffect } from "react"
import axios from "axios"

import handleError from "../services/handleError"

const useFetchPokedex = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        const fetchPokedex = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
                setPokedex(response.data.results)
            } catch (error) {
                handleError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchPokedex()
    }, [])
    return { isLoading, pokedex }
}

export default useFetchPokedex