import { useState } from "react";
import SearchBox from "./components/SearchBox/index";

import data from "../../data/users.json"
import "./style.css"

export default function Buscar() {
    
    const [isAtTop, setIsAtTop] = useState(false)
    const [userData, setUserData] = useState(data)

    const handleCloseOpenSearch = () => {
        setIsAtTop(!isAtTop)
    }

    const handleSearchClick = (searchtext) => {
        if (userData?.length){
            const filteredData = userData.filter((value) => {
                return (
                    value.name.includes(searchtext) || 
                    value.email.includes(searchtext) || 
                    value.username.includes(searchtext) || 
                    value.phone.includes(searchtext)
                )
            })
            console.log(filteredData)
        }
    }
    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox 
            onSearch={handleSearchClick}
            onClose={handleCloseOpenSearch}/>
        </div>
    )
}