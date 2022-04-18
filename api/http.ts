import axios from "axios";
import { getCookie } from "../helpers";
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-type": "application/json",
  },
  xsrfCookieName: process.env.NEXT_PUBLIC_XSRF_TOKEN,
  xsrfHeaderName: process.env.NEXT_PUBLIC_X_XSRF_TOKEN,
});

// Add a request interceptor
http.interceptors.request.use(
  function (config: any) {
    config.headers[
      process.env.NEXT_PUBLIC_X_XSRF_TOKEN === undefined
        ? "X_XSRF_TOKEN"
        : process.env.NEXT_PUBLIC_X_XSRF_TOKEN
    ] = getCookie(process.env.NEXT_PUBLIC_XSRF_TOKEN);
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
http.interceptors.response.use(
  function (response: any) {
    return response.data;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);
export default {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
 
};
