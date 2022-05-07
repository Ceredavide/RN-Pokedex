import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import IPokemon, { Type } from "@interfaces/Pokemon";

import handleError from "@utils/handleError";

const useFetchPokemon = (url: string) => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsloading(true);
      try {
        const pokemonSpeciesQuery: AxiosResponse = await axios.get(url);

        const pokemonQuery: AxiosResponse = await axios.get(
          pokemonSpeciesQuery.data.varieties[0].pokemon.url
        );

        // metto in ordine i tipi per i pokemon
        pokemonQuery.data.types.sort((a: Type, b: Type) => {
          return a.slot - b.slot;
        });

        setError(null);

        setPokemon({ ...pokemonQuery.data, ...pokemonSpeciesQuery.data });
      } catch (error: AxiosError | any) {
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
