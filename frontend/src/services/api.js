import axios from "axios";

const API = axios.create({
  baseURL: "https://job-market-intelligence-platform.onrender.com",
});

export default API;