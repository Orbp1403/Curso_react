import { BrowserRouter as Router, Route, Routes as Rutas } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Cuatrocientoscuatro from "../views/404";
import Home from "../views/Home";
import PokeDetail from "../views/PokeDetail";

export default function Routes(){
    return (
        <Router>
            <ScrollToTop />
            <Rutas>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pokemon/:id" element={<PokeDetail />} />
                <Route path="*" element={<Cuatrocientoscuatro />}></Route>
            </Rutas>
        </Router>
    );
}