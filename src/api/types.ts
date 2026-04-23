// 响应数据结构
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

// API 错误类型
export interface ApiError {
  code: number;
  message: string;
  details?: unknown;
}
