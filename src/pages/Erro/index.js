import { Link } from "react-router-dom";
import './index.css'

function Erro(){
    return(
        <div className="notFound">
            <h1>404</h1>
            <h2>Pagina não encontrada</h2>
            <Link to="/">Veja todos os filmes</Link>
        </div>
    )
}

export default Erro;