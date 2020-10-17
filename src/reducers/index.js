// REDUCERS
import { combineReducers } from "redux";
import {
  popularMoviesReducer,
  searchMovieReducer,
  movieGenresReducer,
  similarMoviesReducer,
  movieDetailsReducer,
  selectMovieReducer,
  moviesByGenreReducer,
  nowPlayingReducer,
  topRatedReducer,
} from "./movieReducers";

const configApiReducer = (state = {}, action) => {
  if (action.type === "GET_CONFIG_API") return action.payload;
  else return state;
};

export default combineReducers({
  nowPlaying: nowPlayingReducer,
  topRated: topRatedReducer,
  configApi: configApiReducer,
  searchMovieResults: searchMovieReducer,
  selectedMovie: selectMovieReducer,
  movieDetails: movieDetailsReducer,
  similarMovies: similarMoviesReducer,
  movieGenres: movieGenresReducer,
  popularMovies: popularMoviesReducer,
  moviesByGenre: moviesByGenreReducer,
});
