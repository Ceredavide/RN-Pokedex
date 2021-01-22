import { useState, useEffect } from "react";
import axios from "axios";

import handleError from "../services/handleError";

const useFetchPokemon = (url: string) => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsloading(true);
      try {
        const response1 = await axios.get(url);

        const response2 = await axios.get(
          response1.data.varieties[0].pokemon.url
        );

        // metto in ordine i tipi per i pokemon
        response2.data.types.sort((a: any, b: any) => {
          return a.slot - b.slot;
        });

        setError(null);

        setPokemon({ ...response1.data, ...response2.data });
      } catch (error) {
        setError(error);
        handleError(error);
      } finally {
        setIsloading(false);
      }
    };
    fetchPokemon();
  }, []);

  return { pokemon, isLoading, error };
};

export default useFetchPokemon;
