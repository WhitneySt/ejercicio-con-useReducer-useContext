import { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import movieReducer, { initialMovies } from "../reducers/movieReducer";
import selectedMovieReducer, { initialSelectedMovie } from "../reducers/selectedmovieReducer";

export const AppContext = createContext({});

const Router = () => {
  const [movies, moviesDispatch] = useReducer(movieReducer, initialMovies);
  const [selectedMovies, selectedMoviesDispatch] = useReducer(
    selectedMovieReducer,
    initialSelectedMovie
  );
  
  const globalStates = {
    userLogged: {},
    movies: { movies, moviesDispatch },
    movie: { selectedMovies, selectedMoviesDispatch },
  };

  return (
    <AppContext.Provider value={globalStates}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
