import { useState } from "react";
import PokemonContext from ".";

import apiCall from "../../api"

export default function PokemonProvider({ children }) {
    
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const getPokemon = async () => {
        try {
            setIsLoading(true)
            setHasError(false)
            setErrorMessage("")
            const pokemonResult = await apiCall({
                url : "https://pokeapi.co/api/v2/pokemon?limit=100"
            })
            setPokemon(pokemonResult.results)
        }catch(err){
            setHasError(true)
            setErrorMessage("Algo ha pasado, verifica tu conexion")
            setPokemon([])
        }finally{
            setIsLoading(false)
        }
    }

    const getPokemonDetail = async (id) => {
        if(!id) Promise.reject("Id es requerido")
        try{
            setIsLoading(true)
            setHasError(false)
            setErrorMessage("")
            const pokemonDetail = await apiCall({
                url : `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            setPokemonDetail(pokemonDetail)
        }catch(err){
            setHasError(true)
            setErrorMessage("Algo ha pasado, verifica tu conexion")
            setPokemonDetail({})
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <PokemonContext.Provider value={{ getPokemon, 
        pokemon, 
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        hasError,
        errorMessage }}>
            {children}
        </PokemonContext.Provider>
    );
}