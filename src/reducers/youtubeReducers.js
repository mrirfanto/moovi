import {
  MOVIE_TRAILER_REQUEST,
  MOVIE_TRAILER_SUCCESS,
  MOVIE_TRAILER_FAILED,
  RESET_TRAILER_STATE,
} from "../constants/youtubeConstants";

const initialState = {
  items: [{ id: {} }],
};

export const movieTrailerReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_REQUEST:
      return { ...state, loading: true };
    case MOVIE_TRAILER_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case MOVIE_TRAILER_FAILED:
      return { ...state, loading: false, error: action.payload };
    case RESET_TRAILER_STATE:
      return { ...initialState };
    default:
      return state;
  }
};
