import moviedb from "../api/moviedb";

// ACTION CREATOR
export const selectMovie = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};

export const getPopularMovies = () => async (dispatch) => {
  const response = await moviedb.get("/movie/popular");

  dispatch({ type: "GET_POPULAR_MOVIES", payload: response.data.results });
};

export const searchMovie = (query) => async (dispatch) => {
  const response = await moviedb.get("/search/movie", {
    params: {
      query,
    },
  });

  dispatch({ type: "SEARCH_MOVIE", payload: response.data.results });
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
  const response = await moviedb.get(`/movie/${movieId}`);

  dispatch({ type: "GET_MOVIE_DETAIL", payload: response.data });
};

export const getSimilarMovies = (movieId) => async (dispatch) => {
  const response = await moviedb.get(`/movie/${movieId}/similar`);

  dispatch({ type: "GET_SIMILAR_MOVIES", payload: response.data.results });
};

export const getMovieGenres = () => async (dispatch) => {
  const response = await moviedb.get("/genre/movie/list");

  dispatch({ type: "GET_MOVIE_GENRES", payload: response.data.genres });
};
