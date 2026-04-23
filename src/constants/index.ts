// API 错误码定义
export const API_ERROR_CODE = {
  // Client error
  NO_NETWORK: -1, // 无网络连接
  REQUEST_TIMEOUT: -2, // 请求超时
  REQUEST_ERROR: -3, // 请求配置错误
} as const;

export type ApiErrorCode = (typeof API_ERROR_CODE)[keyof typeof API_ERROR_CODE];

// API 错误消息
export const API_ERROR_MESSAGE: Record<number | string, string> = {
  [API_ERROR_CODE.NO_NETWORK]: '无网络连接，请检查您的网络',
  [API_ERROR_CODE.REQUEST_TIMEOUT]: '请求超时，请稍后重试',
  [API_ERROR_CODE.REQUEST_ERROR]: '请求配置错误',

  // HTTP 状态码
  400: '请求参数错误',
  401: '未授权，请重新登录',
  403: '无权限访问',
  404: '请求资源不存在',
  408: '请求超时',
  409: '请求冲突',
  422: '数据验证失败',
  429: '请求过于频繁',
  500: '服务器内部错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
};
