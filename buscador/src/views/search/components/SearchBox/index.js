import { useState } from "react"

import "./style.css"

export default function SearchBox({onSearch, onClose, isSearching}){
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
                <button onClick={() => onSearch(search)} disabled={!search.length}>Buscar</button>
                {isSearching && <button onClick={handleSearchClick} disabled={!search.length}>Cerrar</button> }
            </div>
        </div>
    )
}