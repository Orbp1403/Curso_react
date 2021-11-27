import PokemonContext from ".";

export default function PokemonProvider({ children }) {
    return(
        <PokemonContext.Provider value={{showAlert : () => {alert(10)}}}>
            {children}
        </PokemonContext.Provider>
    );
}