import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";

function Filme(){
    const { id } = useParams();
    const {filme, setFilme} = useState({});
    const {loading, setLoading} = useState(true);
    useEffect(() =>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .cath(()=>{
                console.log("Filme não encontrado")
            })
        }
        loadFilme();

        return() =>{
            console.log("Componente foi desmontado")
        }

    },[])

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes....</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h2>Sinopse</h2>
            <span>{filme.overview}</span>

            <strong>Avaliação</strong>
            <span>{filme.vote_average} / 10</span>
        </div>
    )
}

export default Filme;