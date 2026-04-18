import qs from 'qs';

import { get, post } from '@/api/base';
import type { SearchParams } from '@/types/page';

import type {
  BookingParams,
  BookingResponse,
  CancelBookingResponse,
  Hotel,
  HotelListParams,
  HotelListResponse,
} from './types';

export async function search(params: SearchParams) {
  return get(`/?${qs.stringify(params)}`);
}

// ==================== 酒店相关接口 ====================

/** 获取酒店列表 */
export async function fetchHotelList(params: HotelListParams): Promise<HotelListResponse> {
  return get<HotelListResponse>('/hotels', params);
}

/** 获取酒店详情 */
export async function fetchHotelDetail(id: number): Promise<Hotel> {
  return get<Hotel>(`/hotels/${id}`);
}

// ==================== 预订相关接口 ====================

/** 预订酒店 */
export async function createBooking(data: BookingParams): Promise<BookingResponse> {
  return post<BookingResponse>('/bookings', data);
}

/** 取消预订 */
export async function cancelBooking(orderId: string): Promise<CancelBookingResponse> {
  return post<CancelBookingResponse>(`/bookings/${orderId}/cancel`);
}

// ==================== 类型导出 ====================

export type {
  BookingParams,
  BookingResponse,
  CancelBookingResponse,
  Hotel,
  HotelListParams,
  HotelListResponse
} from './types';

