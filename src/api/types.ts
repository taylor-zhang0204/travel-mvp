// 响应数据结构
export interface IApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

// API 错误类型
export interface IApiError {
  code: number;
  message: string;
  details?: unknown;
}
