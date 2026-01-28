import { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";

export const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // Add authentication token or other headers here
  return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // Handle common error status codes (e.g., 401, 403, 500)
  if (error.response) {
    const { status } = error.response;
    if (status === 401) {
      // Handle unauthorized error
    }
  }
  return Promise.reject(error);
};
