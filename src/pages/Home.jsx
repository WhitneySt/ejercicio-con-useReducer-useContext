import { useContext, useEffect } from 'react';
import { AppContext } from '../router/Router';
import { getMovies } from '../services/movieServices';
import { urlBaseImage } from '../services/endpoint';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { movies: { movies, moviesDispatch } } = useContext(AppContext);
  
  useEffect(() => {
    
    // getMovies().then((response) =>
    //   moviesDispatch({
    //     type: "fillMovies",
    //     payload: response,
    //   })
    // );

    fetchData(moviesDispatch);
  }, [moviesDispatch]);

  const fetchData = async (moviesDispatch) => {
    try {
      const response = await getMovies();
      console.log(response);
      moviesDispatch({
        type: "fillMovies",
        payload: response.results,
      });
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      {movies.length ? (
        movies.map((item) => (
          <figure key={item.id} onClick={()=>navigate(`${item.id}`)}>
            <img
              src={`${urlBaseImage}${item.backdrop_path}`}
              alt={item.original_title}
            />
          </figure>
        ))
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {/* {movies.length &&
        movies.map((item) => (
          <figure key={item.id}>
            <img
              src={`${urlBaseImage}${item.backdrop_path}`}
              alt={item.original_title}
            />
          </figure>
        ))} */}
    </div>
  );
}

export default Home