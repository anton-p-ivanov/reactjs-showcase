import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import config from 'config';

const axiosInstance = axios.create({
  baseURL: config.baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error: AxiosError) => {
    if (error.response?.status === 401 && localStorage.getItem('token')) {
      localStorage.removeItem('token');
      window.location.reload();
    }

    return Promise.reject(error);
  },
);

const API = {
  request: <T>(requestConfig: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const token = localStorage.getItem('token');
    const headers = requestConfig.headers || {};

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axiosInstance.request({ ...requestConfig, headers });
  },
};

export default API;
