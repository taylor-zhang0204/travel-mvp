import axios from 'axios';

import { onRequest, onRequestError, onResponse, onResponseError } from './interceptors';
import type { ApiResponse } from './types';

export type { ApiError, ApiResponse } from './types';

// 在模拟器/真机调试时，Android 模拟器用 10.0.2.2 访问宿主机的 localhost
// iOS 模拟器用 localhost 即可，真机需要用宿主机的局域网 IP

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.31.241:8088'
    : 'https://api.kodytravel.com/v1';

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
  api.get<ApiResponse<T>>(url, { params }).then((res) => res.data as T);

export const post = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.post<ApiResponse<T>>(url, data).then((res) => res.data as T);

export const put = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.put<ApiResponse<T>>(url, data).then((res) => res.data as T);

export const del = <T = unknown>(url: string, params?: unknown): Promise<T> =>
  api.delete<ApiResponse<T>>(url, { params }).then((res) => res.data as T);

export const patch = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.patch<ApiResponse<T>>(url, data).then((res) => res.data as T);

export default api;
