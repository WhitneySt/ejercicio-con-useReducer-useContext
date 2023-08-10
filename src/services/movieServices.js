import axios from "axios";
import { endpoints } from "./endpoint";

export const getMovies = async () => {
  try {
    const { data } = await axios.get(endpoints.movies);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMovie = async (idMovie) => {
  try {
    const url = endpoints.movie(idMovie);
      const { data } = await axios.get(url);
      return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
