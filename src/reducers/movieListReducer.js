export default (state = [], action) => {
  switch (action.type) {
    case "GET_POPULAR_MOVIES":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
