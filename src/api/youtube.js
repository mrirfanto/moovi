import axios from "axios";

const KEY = "AIzaSyBXeKnn0hkO7SiT1QW0gZ73hdRnRpcNN8U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 1,
    key: KEY,
  },
});
