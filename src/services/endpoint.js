const URL_API = "https://api.themoviedb.org/3/movie";
const API_KEY = "912ecfda069342c00301ac1533087681";
const URL_JSON = "http://localhost:3000/"
export const urlBaseImage = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

export const endpoints = {
    movies: `${URL_API}/now_playing?api_key=${API_KEY}&language=es-Es`,
    movie: (idMovie) => `${URL_API}/${idMovie}?api_key=${API_KEY}&language=es-Es`,
    teatros: `${URL_JSON}teatros`,
    salas: `${URL_JSON}salas`,
    funciones: `${URL_JSON}funciones?_expand=salas`
}