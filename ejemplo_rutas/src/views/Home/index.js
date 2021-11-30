import { /*useContext,*/ useEffect } from "react"
import Loading from "../../components/Loading"
import PokemonContext from "../../context/pokemon"
import PokemonList from "./components/PokemonList"
import ErrorMessage from "../../components/ErrorMessage"
import usePokemonStore from "../../zustand/stores/pokemon"

export default function Home(){
    // CONTEXT API
    //const { getPokemon, pokemon, isLoading, hasError, errorMessage } = useContext(PokemonContext)
    // ZUSTAND
    const { getPokemon, pokemon, isLoading, hasError, errorMessage } = usePokemonStore( state =>({
        getPokemon : state.getPokemon, 
        pokemon : state.pokemon, 
        isLoading : state.isLoading, 
        hasError : state.hasError, 
        errorMessage : state.errorMessage
    }))

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