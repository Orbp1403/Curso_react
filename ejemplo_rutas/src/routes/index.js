import { BrowserRouter as Router, Route, Routes as Rutas } from "react-router-dom";
import Cuatrocientoscuatro from "../views/404";
import Home from "../views/Home";

export default function Routes(){
    return (
        <Router>
            <Rutas>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Cuatrocientoscuatro />}></Route>
            </Rutas>
        </Router>
    );
}