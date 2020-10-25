import youtubeApi from "../api/youtube";
import {
  MOVIE_TRAILER_REQUEST,
  MOVIE_TRAILER_SUCCESS,
  MOVIE_TRAILER_FAILED,
  RESET_TRAILER_STATE,
} from "../constants/youtubeConstants";

export const RESET_STATE = () => {
  return { type: RESET_TRAILER_STATE };
};

export const getMovieTrailer = (query) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_TRAILER_REQUEST });

    const {
      data: { items },
    } = await youtubeApi.get("/search", {
      params: {
        q: query,
      },
    });
    dispatch({
      type: MOVIE_TRAILER_SUCCESS,
      payload: items,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_TRAILER_FAILED,
      payload: error.message,
    });
  }
};
