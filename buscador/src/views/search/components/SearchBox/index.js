import { useState } from "react"

import "./style.css"

export default function SearchBox({onSearch, onClose}){
    const [search, setSearch] = useState("")

    const handleSearchClick = () => {
        setSearch("")
        onClose()
    }
    return (
        <div className="search-box">
            <h2 className="search-box-title">Buscador</h2>
            <div className="search-box-buttons">
                <label>
                    <input 
                    value = {search} 
                    onChange={({target : { value }}) => setSearch(value)}
                    className = "search-box-input"></input>
                </label>
                <button onClick={() => onSearch(search)}>Buscar</button>
                <button onClick={handleSearchClick}>Cerrar</button>
            </div>
        </div>
    )
}