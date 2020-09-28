// REDUCERS
import { combineReducers } from "redux";
import movieListReducer from "./movieListReducer";
import nowPlayingReducer from "./nowPlayingReducer";

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") return action.payload;
  else return selectedMovie;
};

const configApiReducer = (state = {}, action) => {
  if (action.type === "GET_CONFIG_API") return action.payload;
  else return state;
};

export default combineReducers({
  movieList: movieListReducer,
  nowPlaying: nowPlayingReducer,
  configApi: configApiReducer,
  selectedMovie: selectedMovieReducer,
});
