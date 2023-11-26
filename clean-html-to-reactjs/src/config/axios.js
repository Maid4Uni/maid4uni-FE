// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://maid4uni-be-production.up.railway.app/api/v1/",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  console.log("Request config:", config);
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
