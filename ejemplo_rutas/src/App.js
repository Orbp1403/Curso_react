import logo from './logo.svg';
import './App.css';
import Routes from "./routes"
import PokemonProvider from './context/pokemon/Provider';

function App() {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
}

export default App;
