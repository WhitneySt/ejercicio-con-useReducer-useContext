export const initialMovies = [];

const movieReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case "fillMovies":
      return action.payload;

    default:
      return state;
  }
};

export default movieReducer;
