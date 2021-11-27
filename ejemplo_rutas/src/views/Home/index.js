import { useContext, useEffect } from "react"
import PokemonContext from "../../context/pokemon"
import PokemonList from "./components/PokemonList"

export default function Home(){
    const { getPokemon, pokemon } = useContext(PokemonContext)
    
    useEffect(() => {
        getPokemon().catch(null)
    }, [])

    console.log(pokemon)
    return (
    <div>
        <PokemonList pokemon={pokemon}/>    
    </div>)
}