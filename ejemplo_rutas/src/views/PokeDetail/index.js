import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import Loading from "../../components/Loading"

import PokemonContext from "../../context/pokemon"
import PokeStats from "./components/PokeStats"
import ErrorMessage from "../../components/ErrorMessage"

export default function PokeDetail () {
    const { id } = useParams()
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext)

    useEffect(() => {
        getPokemonDetail(id).catch(null)
    }, [])

    console.log(pokemonDetail)
    if(isLoading){
        return <Loading title="Cargando pokemon..."/>
    }
    console.log(pokemonDetail?.stats ?? [])
    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> : (
                <>
                    <h3 style={{
                        marginTop : 15,
                        marginBottom : 15
                    }}>Informacion General</h3>
                    <p>{`Nombre: ${pokemonDetail?.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight} kg.`}</p>
                    <p>{`Altura: ${pokemonDetail?.height} cm.`}</p>
                    <div>
                        <h3 style={{
                            marginTop : 30,
                            marginBottom : 15
                        }}>Habilidades </h3>
                        <PokeStats stats={pokemonDetail?.stats ?? []}/>
                    </div>
                </>
            )}
        </div>
    )
}