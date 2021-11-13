import "./style.css"

export default function SearchResult ({ results }) {
    return (
        <div className="results">
            {results?.map((value) => {
                return(
                    <div key={value.id}>
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                );
            })}
        </div>
    )
}