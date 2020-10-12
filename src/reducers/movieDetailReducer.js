const initialState = {
  detail: {},
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_DETAIL_REQUEST":
      return { ...state, isFetching: true };
    case "GET_MOVIE_DETAIL_SUCCESS":
      return { ...state, detail: action.payload, isFetching: false };
    default:
      return state;
  }
};
