export const initialSelectedMovie = {}

const selectedMovieReducer = (state=initialSelectedMovie, action) => {
    switch (action.type) {
        case 'fillmovie':
            return action.payload;
        default:
            return state;
    }
}

export default selectedMovieReducer;