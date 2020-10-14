import {
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_SUCCESS,
  POPULAR_MOVIES_FAILED,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILED,
  MOVIE_GENRES_REQUEST,
  MOVIE_GENRES_SUCCESS,
  MOVIE_GENRES_FAILED,
  SIMILAR_MOVIES_REQUEST,
  SIMILAR_MOVIES_SUCCESS,
  SIMILAR_MOVIES_FAILED,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAILED,
} from "../constants/movieConstants";

export const popularMoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_REQUEST:
      return { ...state, loading: true, movies: [] };
    case POPULAR_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case POPULAR_MOVIES_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return { ...state, loading: true, movies: [] };
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case SEARCH_MOVIES_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieGenresReducer = (state = { genres: [] }, action) => {
  switch (action.type) {
    case MOVIE_GENRES_REQUEST:
      return { ...state, loading: true, genres: [] };
    case MOVIE_GENRES_SUCCESS:
      return { ...state, loading: false, genres: action.payload };
    case MOVIE_GENRES_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const similarMoviesReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case SIMILAR_MOVIES_REQUEST:
      return { ...state, loading: true, movies: [] };
    case SIMILAR_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case SIMILAR_MOVIES_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieDetailsReducer = (
  state = { detail: { release_date: "" } },
  action
) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { ...state, loading: true, detail: {} };
    case MOVIE_DETAILS_SUCCESS:
      return { ...state, loading: false, detail: action.payload };
    case MOVIE_DETAILS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
