// REDUCERS
import { combineReducers } from "redux";
import movieListReducer from "./movieListReducer";
import nowPlayingReducer from "./nowPlayingReducer";
import {
  popularMoviesReducer,
  searchMovieReducer,
  movieGenresReducer,
  similarMoviesReducer,
  movieDetailsReducer,
} from "./movieReducers";

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") return action.payload;
  else return selectedMovie;
};

const configApiReducer = (state = {}, action) => {
  if (action.type === "GET_CONFIG_API") return action.payload;
  else return state;
};

const moviesGroupedByGenreReducer = (state = [], action) => {
  if (action.type === "GET_MOVIE_BY_GENRE_REQUEST") {
    return { list: [], isFetching: true };
  } else if (action.type === "GET_MOVIE_BY_GENRE_SUCCESS") {
    return { list: action.payload, isFetching: false };
  } else return state;
};

export default combineReducers({
  movieList: movieListReducer,
  nowPlaying: nowPlayingReducer,
  configApi: configApiReducer,
  searchMovieResults: searchMovieReducer,
  selectedMovie: selectedMovieReducer,
  movieDetails: movieDetailsReducer,
  similarMovies: similarMoviesReducer,
  movieGenres: movieGenresReducer,
  popularMovies: popularMoviesReducer,
  moviesByGenre: moviesGroupedByGenreReducer,
});
