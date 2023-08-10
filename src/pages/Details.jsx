import { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { AppContext } from '../router/Router';
import { getMovie } from '../services/movieServices';


const Details = () => {
  const { id } = useParams();
  const {
    movie: { selectedMovies, selectedMoviesDispatch }
  } = useContext(AppContext);


  useEffect(() => {
    getMovie(id).then((response) => {
      console.log(response);
      selectedMoviesDispatch({
        type: 'fillmovie',
        payload: response
      });
    });
  }, [id, selectedMoviesDispatch]);
  

  return (
    <div>Details</div>
  )
}

export default Details