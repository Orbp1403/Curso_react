import { useContext, useEffect } from "react"
import { useParams } from "react-router"

import PokemonContext from "../../context/pokemon"

export default function PokeDetail () {
    const { id } = useParams()
    const { getPokemonDetail, pokemonDetail, isLoading } = useContext(PokemonContext)

    useEffect(() => {
        /** 
         * Cada que cambie el id
         * cambie el detalle del pokemon
        */
        getPokemonDetail(id).catch(null)
    }, [])

    console.log(pokemonDetail)
    if(isLoading){
        return (<p>
            Cargando pokemon...
        </p>)
    }
    return (
        <div>
            <p>{`Nombre: ${pokemonDetail?.name}`}</p>
            <p>{`Peso: ${pokemonDetail?.weight} kg.`}</p>
            <p>{`Altura: ${pokemonDetail?.height} cm.`}</p>
        </div>
    )
}