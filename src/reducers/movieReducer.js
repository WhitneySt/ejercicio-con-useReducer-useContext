export const initialMovies = [];
// export const initialMovies = {
//   movies: [],
//   selectedMovie:{}
// }

const movieReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case "fillMovies":
      return action.payload;
    //   return {
    //     ...state,
    //     movies: action.payload
    //   };

    // case 'fillMovie':
    //   return {
    //     ...state,
    //     selectedMovie: action.payload
    //   }
    default:
      return state;
  }
};

export default movieReducer;
