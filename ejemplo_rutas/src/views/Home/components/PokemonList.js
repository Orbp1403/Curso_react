import PokemonListItem from "./PokemonListeItem"

export default function PokemonList ( { pokemon }) {
    return (
        <>
            {pokemon?.map(( pokemonitem, index) => {
                return <PokemonListItem key = {index} {...pokemonitem}/>
            })}
        </>
    )
}