//https://api.themoviedb.org/3
//https://api.themoviedb.org/3/movie/changes?page=1

import axios from "axios";

const api = axios.create({
    baseUrl: 'https://api.themoviedb.org/3'
});

export default api;