import create from "zustand";
import apiCall from "../../api";

const usePokemonStore = create(( set, get) => ({
    getPokemon: async() => {
        try{
            set({ hasError : false, errorMessage : "", isLoading : true })
            //console.log("Usando Zustand")
            const pokemonResult = await apiCall({
                url : "https://pokeapi.co/api/v2/pokemon?limit=100"
            })
            set({ pokemon : pokemonResult.results })
        } catch (err){
            set({ pokemon : [], hasError : true, errorMessage : "Algo ha pasado"})
        } finally {
            set({ isLoading : false })
        }
    },
    pokemon : [],
    getPokemonDetail : async(id) => {
        if(!id) Promise.reject("Id es requerido")
        try {
            set({ hasError : false, errorMessage : "", isLoading : true })
            //console.log("Usando Zustand")
            const pokemonDetail = await apiCall({
                url : `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            set({ pokemonDetail })
        } catch(err){
            set({ pokemonDetail : {}, hasError : true, errorMessage : "Algo ha pasado"})
        } finally {
            set ({ isLoading : false })
        }
    },
    pokemonDetail : {},
    isLoading : false,
    errorMessage : "",
    hasError : false  
}))

export default usePokemonStore