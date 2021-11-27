import { useParams } from "react-router"

export default function PokeDetail () {
    let { id } = useParams()
    return (
        <div>PokeDetail</div>
    )
}