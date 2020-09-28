export default (state = [], action) => {
  switch (action.type) {
    case "GET_NOW_PLAYING":
      return action.payload;
    default:
      return state;
  }
};
