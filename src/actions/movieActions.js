import moviedb from "../api/moviedb";
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

export const getPopularMovies = () => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_MOVIES_REQUEST });

    const {
      data: { results },
    } = await moviedb.get("/movie/popular");
    dispatch({
      type: POPULAR_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: POPULAR_MOVIES_FAILED,
      payload: error.message,
    });
  }
};

export const searchMovie = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_MOVIES_REQUEST });

    const {
      data: { results },
    } = await moviedb.get("/search/movie", {
      params: {
        query,
      },
    });
    dispatch({
      type: SEARCH_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIES_FAILED,
      payload: error.message,
    });
  }
};

export const getMovieGenres = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_GENRES_REQUEST });

    const {
      data: { genres },
    } = await moviedb.get("/genre/movie/list");
    dispatch({
      type: MOVIE_GENRES_SUCCESS,
      payload: genres,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_GENRES_FAILED,
      payload: error.message,
    });
  }
};

export const getSimilarMovies = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: SIMILAR_MOVIES_REQUEST });

    const {
      data: { results },
    } = await moviedb.get(`/movie/${movieId}/similar`);

    dispatch({
      type: SIMILAR_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: SIMILAR_MOVIES_FAILED,
      payload: error.message,
    });
  }
};

export const getMovieDetails = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

    const { data } = await moviedb.get(`/movie/${movieId}`);
    console.log(data);
    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAILED,
      payload: error.message,
    });
  }
};
