export default (state = [], action) => {
  switch (action.type) {
    case "GET_NOW_PLAYING":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
