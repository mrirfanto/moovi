// REDUCERS
import { combineReducers } from "redux";
import movieListReducer from "./movieListReducer";
import nowPlayingReducer from "./nowPlayingReducer";
import movieDetailReducer from "./movieDetailReducer";

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") return action.payload;
  else return selectedMovie;
};

const configApiReducer = (state = {}, action) => {
  if (action.type === "GET_CONFIG_API") return action.payload;
  else return state;
};

const searchMovieReducer = (state = [], action) => {
  if (action.type === "SEARCH_MOVIE_REQUEST") {
    return { list: [], isFetching: true };
  } else if (action.type === "SEARCH_MOVIE_SUCCESS") {
    return { list: action.payload, isFetching: false };
  } else return state;
};

const similarMoviesReducer = (state = [], action) => {
  if (action.type === "GET_SIMILAR_MOVIES") return action.payload;
  else return state;
};

const movieGenresReducer = (state = [], action) => {
  if (action.type === "GET_MOVIE_GENRES") return action.payload;
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
  movieDetail: movieDetailReducer,
  similarMovies: similarMoviesReducer,
  movieGenres: movieGenresReducer,
  moviesByGenre: moviesGroupedByGenreReducer,
});
