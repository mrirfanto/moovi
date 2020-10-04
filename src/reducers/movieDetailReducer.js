export default (state = {}, action) => {
  switch (action.type) {
    case "GET_MOVIE_DETAIL":
      return { ...action.payload };
    default:
      return state;
  }
};
