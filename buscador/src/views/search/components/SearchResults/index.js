import SearchResultItem from "./SearchResultItem";
import "./style.css"

export default function SearchResult ({ results, isSearching }) {
    return (
        <div className="results">
            {!results?.length && isSearching && <p>No Existen resultados</p>}
            {results?.map((value) => {
                return(
                    <SearchResultItem 
                    key = {value.id}
                    {...value}/>
                );
            })}
        </div>
    )
}