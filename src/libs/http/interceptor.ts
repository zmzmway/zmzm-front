import { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { STATUS_CODE } from "./constants";

/* ================= REQUEST ================= */

export const onRequest = {
  request: (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config;
  },

  error: (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
};

/* ================= RESPONSE ================= */

export const onResponse = {
  response: (response: AxiosResponse): AxiosResponse => {
    return response;
  },

  error: (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      const { status } = error.response;

      if (status === STATUS_CODE.UNAUTHORIZED) {
        console.log("[interceptor] Unauthorized access");
      }
    }

    return Promise.reject(error);
  },
};
