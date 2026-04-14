import axios from 'axios';

import { onRequest, onRequestError, onResponse, onResponseError } from './interceptors';
import type { ApiResponse } from './types';

export type { ApiError, ApiResponse } from './types';

const BASE_URL = 'https://api.kodytravel.com/v1';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 注册拦截器
api.interceptors.request.use(onRequest, onRequestError);
api.interceptors.response.use(onResponse, onResponseError);

// 便捷方法
export const get = <T = unknown>(url: string, params?: unknown): Promise<T> =>
  api.get<ApiResponse<T>>(url, { params }).then((res) => res.data.data as T);

export const post = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.post<ApiResponse<T>>(url, data).then((res) => res.data.data as T);

export const put = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.put<ApiResponse<T>>(url, data).then((res) => res.data.data as T);

export const del = <T = unknown>(url: string, params?: unknown): Promise<T> =>
  api.delete<ApiResponse<T>>(url, { params }).then((res) => res.data.data as T);

export const patch = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.patch<ApiResponse<T>>(url, data).then((res) => res.data.data as T);

export default api;
