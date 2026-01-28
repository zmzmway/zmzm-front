import axios, { AxiosInstance } from "axios";
import { onRequest, onResponse } from "./interceptor";
import { TIME_OUT, API_URL } from "./constants";

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: TIME_OUT,
  // withCredentials: true,
});

api.interceptors.request.use(onRequest.request, onRequest.error);
api.interceptors.response.use(onResponse.response, onResponse.error);
