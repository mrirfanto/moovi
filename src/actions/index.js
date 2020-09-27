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

  dispatch({ type: "GET_POPULAR_MOVIES", payload: response });
};
