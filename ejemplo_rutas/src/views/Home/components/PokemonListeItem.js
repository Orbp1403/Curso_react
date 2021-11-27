import { Link } from "react-router-dom";

export default function PokemonListItem( { name, url }) {

    const getId = () => {
        return url.split("/")[6]
    }

    return(
        <>
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${getId()}`}>
                Ver detalle
                </Link>
            </button>
        </>
    )
}