import { useState } from "react";
import PokemonContext from ".";

import apiCall from "../../api"

export default function PokemonProvider({ children }) {
    
    const [pokemon, setPokemon] = useState([])

    const getPokemon = async () => {
        try {
            const pokemonResult = await apiCall({
                url : "https://pokeapi.co/api/v2/pokemon?limit=100"
            })
            setPokemon(pokemonResult.results)
        }catch(err){
            setPokemon([])
        }
    }

    return(
        <PokemonContext.Provider value={{ getPokemon, pokemon }}>
            {children}
        </PokemonContext.Provider>
    );
}