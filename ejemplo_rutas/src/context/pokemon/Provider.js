import { useState } from "react";
import PokemonContext from ".";

import apiCall from "../../api"

export default function PokemonProvider({ children }) {
    
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getPokemon = async () => {
        try {
            setIsLoading(true)
            const pokemonResult = await apiCall({
                url : "https://pokeapi.co/api/v2/pokemon?limit=100"
            })
            setPokemon(pokemonResult.results)
        }catch(err){
            setPokemon([])
        }finally{
            setIsLoading(false)
        }
    }

    const getPokemonDetail = async (id) => {
        if(!id) Promise.reject("Id es requerido")
        try{
            setIsLoading(true)
            const pokemonDetail = await apiCall({
                url : `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            setPokemonDetail(pokemonDetail)
        }catch(err){
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
        isLoading }}>
            {children}
        </PokemonContext.Provider>
    );
}