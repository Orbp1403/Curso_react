import { BrowserRouter as Router, Route, Routes as Rutas } from "react-router-dom";
import Home from "../views/Home";

export default function Routes(){
    return (
        <Router>
            <Rutas>
                <Route path="/" element={<Home />} />
            </Rutas>
        </Router>
    );
}