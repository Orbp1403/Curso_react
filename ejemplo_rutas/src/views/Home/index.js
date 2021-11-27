import { useContext, useEffect } from "react"
import Loading from "../../components/Loading"
import PokemonContext from "../../context/pokemon"
import PokemonList from "./components/PokemonList"
import ErrorMessage from "../../components/ErrorMessage"

export default function Home(){
    const { getPokemon, pokemon, isLoading, hasError, errorMessage } = useContext(PokemonContext)
    
    useEffect(() => {
        getPokemon().catch(null)
    }, [])

    if(isLoading){
        return <Loading title="Cargando resultados..." />
    }
    return (
        <>
            {hasError ? <ErrorMessage message={errorMessage} /> : <PokemonList pokemon={pokemon}/>}
        </>
    )        
}