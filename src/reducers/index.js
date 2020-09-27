// REDUCERS
import { combineReducers } from "redux";
import movieListReducer from "./movieListReducer";

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") return action.payload;
  else return selectedMovie;
};

export default combineReducers({
  movieList: movieListReducer,
  selectedMovie: selectedMovieReducer,
});
