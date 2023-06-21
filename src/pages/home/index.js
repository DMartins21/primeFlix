import { useState, useEffect } from "react";
import api from "../../services/Api";

function Home(){
    const [filmes,setFilmes] = useState([]);
    
    useEffect(() =>{
        async function loadFilmes(){
            const resposive = await api.get("movie/now_palying", {
                params:{
                    api_key: "1b23c66281853320747b15d6d16228fa",
                    language: "pt-BR",
                    page:1,
                }
            })
            console.log(resposive.data.results);
        }
    })

    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;