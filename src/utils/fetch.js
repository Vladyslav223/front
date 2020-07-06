import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4444/goods",
  responseType: "json"
});