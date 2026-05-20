import { get, post } from '@/src/api/base';
import type { SearchParams } from '@/src/types/page';

import mock from './mock.json';
import type {
  IBookingParams,
  IBookingResponse,
  ICancelBookingResponse,
  IHotel,
  IHotelListParams,
  IHotelListResponse,
} from './types';

export type SearchHotelResponse = typeof mock;

export async function search(params: SearchParams): Promise<SearchHotelResponse> {
  console.log(params);
  return Promise.resolve(mock);
}

// ==================== 酒店相关接口 ====================

/** 获取酒店列表 */
export async function fetchHotelList(params: IHotelListParams): Promise<IHotelListResponse> {
  return get<IHotelListResponse>('/hotels', params);
}

/** 获取酒店详情 */
export async function fetchHotelDetail(id: number): Promise<IHotel> {
  return get<IHotel>(`/hotels/${id}`);
}

// ==================== 预订相关接口 ====================

/** 预订酒店 */
export async function createBooking(data: IBookingParams): Promise<IBookingResponse> {
  return post<IBookingResponse>('/bookings', data);
}

/** 取消预订 */
export async function cancelBooking(orderId: string): Promise<ICancelBookingResponse> {
  return post<ICancelBookingResponse>(`/bookings/${orderId}/cancel`);
}

// ==================== 类型导出 ====================

export type {
  IBookingParams,
  IBookingResponse,
  ICancelBookingResponse,
  IHotel,
  IHotelListParams,
  IHotelListResponse,
} from './types';

