import{BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import Filme from "./pages/Filmes";
import Header from "./components/Header";
import Erro from "./pages/Erro";

function RouteApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Filme/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;