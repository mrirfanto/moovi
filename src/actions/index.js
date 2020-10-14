import moviedb from "../api/moviedb";

// ACTION CREATOR
export const selectMovie = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};

export const searchMovie = (query) => async (dispatch) => {
  dispatch({ type: "SEARCH_MOVIE_REQUEST" });
  const response = await moviedb.get("/search/movie", {
    params: {
      query,
    },
  });

  dispatch({ type: "SEARCH_MOVIE_SUCCESS", payload: response.data.results });
};

export const getNowPlayingMovies = () => async (dispatch) => {
  const response = await moviedb.get("/movie/now_playing");

  dispatch({ type: "GET_NOW_PLAYING", payload: response.data.results });
};

export const getConfigurationApi = () => async (dispatch) => {
  const response = await moviedb.get("configuration");

  dispatch({ type: "GET_CONFIG_API", payload: response.data });
};

export const getMovieDetail = (movieId) => async (dispatch) => {
  dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" });
  const response = await moviedb.get(`/movie/${movieId}`);

  dispatch({ type: "GET_MOVIE_DETAIL_SUCCESS", payload: response.data });
};

export const getSimilarMovies = (movieId) => async (dispatch) => {
  const response = await moviedb.get(`/movie/${movieId}/similar`);

  dispatch({ type: "GET_SIMILAR_MOVIES", payload: response.data.results });
};

export const getMovieGenres = () => async (dispatch) => {
  const response = await moviedb.get("/genre/movie/list");

  dispatch({ type: "GET_MOVIE_GENRES", payload: response.data.genres });
};

export const getMovieByGenre = (genreId) => async (dispatch) => {
  dispatch({ type: "GET_MOVIE_BY_GENRE_REQUEST" });
  const response = await moviedb.get(`/discover/movie`, {
    params: {
      with_genres: genreId,
    },
  });

  dispatch({
    type: "GET_MOVIE_BY_GENRE_SUCCESS",
    payload: response.data.results,
  });
};
