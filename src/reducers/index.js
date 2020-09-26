// REDUCERS
import { combineReducers } from "redux";

const moviesReducer = () => {
  return [];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") return action.payload;
  else return selectedMovie;
};

export default combineReducers({
  movieList: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
