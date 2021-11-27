import { useContext, useEffect } from "react"
import PokemonContext from "../../context/pokemon"

export default function Home(){
    const { showAlert } = useContext(PokemonContext)
    
    useEffect(() => {
        showAlert();
    }, [])

    return <div>Home</div>
}