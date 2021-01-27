import { useState, useEffect } from "react";
import axios from "axios";

import handleError from "../services/handleError";

const useFetchPokedex = (start: number, end: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const fetchPokedex = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${end}`
        );
        setPokedex(response.data.results);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokedex();
  }, []);
  return { isLoading, pokedex };
};

export default useFetchPokedex;
