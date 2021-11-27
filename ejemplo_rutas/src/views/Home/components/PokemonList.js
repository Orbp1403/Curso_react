import PokemonListItem from "../PokemonListeItem"

export default function PokemonList ( { pokemon }) {
    console.log("pokemon list", pokemon)
    return (
        <div>
            {pokemon?.map(( pokemonitem, index) => {
                return <PokemonListItem key = {index} {...pokemonitem}/>
            })}
        </div>
    )
}