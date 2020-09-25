import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "cc36bf8ed4a7a809453276df2c597b8b",
  },
});
