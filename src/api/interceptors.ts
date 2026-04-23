import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import * as Network from 'expo-network';

import { API_ERROR_CODE, API_ERROR_MESSAGE } from '@/src/constants';

import { ApiError } from './types';

// 字段转换：snake_case -> camelCase
export function transformKeysToCamel<T>(obj: unknown): T {
  if (obj === null || obj === undefined) return obj as T;
  if (Array.isArray(obj)) return obj.map((item) => transformKeysToCamel<T>(item)) as T;

  if (typeof obj === 'object') {
    return Object.entries(obj as Record<string, unknown>).reduce(
      (acc, [key, value]) => {
        // 转换 snake_case 为 camelCase
        const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        (acc as Record<string, unknown>)[camelKey] = transformKeysToCamel(value);
        return acc;
      },
      {} as Record<string, unknown>
    ) as T;
  }

  return obj as T;
}

// 检查网络状态
async function checkNetworkStatus(): Promise<{
  isConnected: boolean;
  message: string;
}> {
  try {
    const state = await Network.getNetworkStateAsync();
    if (!state.isConnected) {
      return {
        isConnected: false,
        message: API_ERROR_MESSAGE[API_ERROR_CODE.NO_NETWORK],
      };
    }
    return { isConnected: true, message: '' };
  } catch {
    // expo-network 未安装或加载失败，静默忽略
    return { isConnected: true, message: '' };
  }
}

// 请求拦截器 - 请求发送前执行
export function onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  // 可在此添加 token 等
  // const token = await getToken();
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
}

// 请求错误拦截器 - 处理网络问题
export async function onRequestError(error: AxiosError): Promise<never> {
  const { isConnected, message } = await checkNetworkStatus();

  if (!isConnected) {
    console.error('[API] No Network:', message);
    return Promise.reject({
      code: API_ERROR_CODE.NO_NETWORK,
      message,
    });
  }

  if (error.code === 'ECONNABORTED') {
    const timeoutMsg = API_ERROR_MESSAGE[API_ERROR_CODE.REQUEST_TIMEOUT];
    console.error('[API] Timeout:', timeoutMsg);
    return Promise.reject({
      code: API_ERROR_CODE.REQUEST_TIMEOUT,
      message: timeoutMsg,
    });
  }

  const errorMsg = API_ERROR_MESSAGE[API_ERROR_CODE.REQUEST_ERROR];
  console.error('[Request Error]', error.message);
  return Promise.reject({
    code: API_ERROR_CODE.REQUEST_ERROR,
    message: error.message || errorMsg,
  });
}

// 响应成功拦截器 - 数据转换
export function onResponse(response: AxiosResponse): AxiosResponse {
  // 转换字段为驼峰
  console.log('response.data', response.data);
  response.data = transformKeysToCamel(response.data);
  console.log('transformKeysToCamel', response.data);
  return response;
}

// 响应错误拦截器 - 状态码处理
export async function onResponseError(error: AxiosError<ApiError>): Promise<never> {
  const { response } = error;

  if (response) {
    const { status, data } = response;
    const message =
      data?.message || API_ERROR_MESSAGE[status as keyof typeof API_ERROR_MESSAGE] || '未知错误';

    switch (status) {
      case 400:
        console.error(`[API] ${status} Bad Request:`, message);
        break;
      case 401:
        console.error(`[API] ${status} Unauthorized:`, message);
        // router.push('/login');
        break;
      case 403:
        console.error(`[API] ${status} Forbidden:`, message);
        break;
      case 404:
        console.error(`[API] ${status} Not Found:`, message);
        break;
      case 408:
        console.error(`[API] ${status} Request Timeout:`, message);
        break;
      case 409:
        console.error(`[API] ${status} Conflict:`, message);
        break;
      case 422:
        console.error(`[API] ${status} Unprocessable Entity:`, message);
        break;
      case 429:
        console.error(`[API] ${status} Too Many Requests:`, message);
        break;
      case 500:
        console.error(`[API] ${status} Internal Server Error:`, message);
        break;
      case 502:
        console.error(`[API] ${status} Bad Gateway:`, message);
        break;
      case 503:
        console.error(`[API] ${status} Service Unavailable:`, message);
        break;
      case 504:
        console.error(`[API] ${status} Gateway Timeout:`, message);
        break;
      default:
        console.error(`[API] Error ${status}:`, message);
    }

    return Promise.reject({ code: status, message, details: data });
  } else if (error.request) {
    // 网络问题（无网络或服务器无响应）
    const { isConnected } = await checkNetworkStatus();
    const message = isConnected
      ? '服务器无响应，请稍后重试'
      : API_ERROR_MESSAGE[API_ERROR_CODE.NO_NETWORK];

    console.error('[API] Network Error:', message);
    return Promise.reject({
      code: isConnected ? 503 : API_ERROR_CODE.NO_NETWORK,
      message,
    });
  } else {
    console.error('[API] Request Error:', error.message);
    return Promise.reject({
      code: API_ERROR_CODE.REQUEST_ERROR,
      message: error.message || API_ERROR_MESSAGE[API_ERROR_CODE.REQUEST_ERROR],
    });
  }
}
