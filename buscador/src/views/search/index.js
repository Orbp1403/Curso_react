import { useState } from "react";
import SearchBox from "./components/SearchBox/index";

import data from "../../data/users.json"
import "./style.css"
import SearchResult from "./components/SearchResults";

export default function Buscar() {
    
    const [isAtTop, setIsAtTop] = useState(false)
    const [userData, setUserData] = useState(data)
    const [results, setResults] = useState([])

    const handleCloseSearch = () => {
        setIsAtTop(false)
        setResults([])
    }

    const handleSearchClick = (searchtext) => {
        if (userData?.length){            
            const searchtextminus = searchtext.toLowerCase()
            const filteredData = userData.filter((value) => {
                setIsAtTop(true)
                return (
                    value.name.toLowerCase().includes(searchtextminus) || 
                    value.email.toLowerCase().includes(searchtextminus) || 
                    value.username.toLowerCase().includes(searchtextminus) || 
                    value.phone.includes(searchtextminus)
                )
            })
            setResults(filteredData)
        }
    }
    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox 
            onSearch={handleSearchClick}
            onClose={handleCloseSearch}/>
            <SearchResult 
            results={results}/>
        </div>
    )
}