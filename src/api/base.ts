import axios from 'axios';

import { config, type AppEnv } from '@/src/config/env';

import { onRequest, onRequestError, onResponse, onResponseError } from './interceptors';
import type { IApiResponse } from './types';

// 各环境的 API 地址，按 env 动态选择
const API_BASE_URLS: Record<AppEnv, string> = {
  development: 'https://api-dev-ap.kodypay.com/travel-agent',
  staging: 'https://api-staging-ap.kodypay.com/travel-agent',
  production: 'https://api-ap.kodypay.com/travel-agent',
};

const api = axios.create({
  baseURL: API_BASE_URLS[config.env],
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 注册拦截器
api.interceptors.request.use(onRequest, onRequestError);
api.interceptors.response.use(onResponse, onResponseError);

// 便捷方法
export const get = <T = unknown>(url: string, params?: unknown): Promise<T> =>
  api.get<IApiResponse<T>>(url, { params }).then((res) => res.data as T);

export const post = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.post<IApiResponse<T>>(url, data).then((res) => res.data as T);

export const put = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.put<IApiResponse<T>>(url, data).then((res) => res.data as T);

export const del = <T = unknown>(url: string, params?: unknown): Promise<T> =>
  api.delete<IApiResponse<T>>(url, { params }).then((res) => res.data as T);

export const patch = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  api.patch<IApiResponse<T>>(url, data).then((res) => res.data as T);

export default api;
