import "./style.css"

export default function SearchResultItem( { name, email } ) {
    return (
        <div className="result">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}