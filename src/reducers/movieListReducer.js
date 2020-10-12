const initialState = {
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_POPULAR_MOVIES_REQUEST":
      return { list: [], isFetching: true };
    case "GET_POPULAR_MOVIES_SUCCESS":
      return { list: [...action.payload], isFetching: false };
    default:
      return state;
  }
};
