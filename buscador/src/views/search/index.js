import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox/index";

import "./style.css"
import SearchResult from "./components/SearchResults";

export default function Buscar() {
    
    const [isAtTop, setIsAtTop] = useState(false)
    const [userData, setUserData] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {
        const getUsers = async() => {
            try{
                /*const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()*/
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUserData(data)
            }catch(err){
                console.log(err)
            }
        }
        getUsers().catch(null)
    }, [])

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
            onClose={handleCloseSearch}
            isSearching={isAtTop}/>
            <SearchResult 
            results={results}
            isSearching={isAtTop}/>
        </div>
    )
}