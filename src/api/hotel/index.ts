import { get } from '@/src/api/base';

import type {
  IBookingOptionsRequest,
  IBookingOptionsResponse,
  IHotelListRequest,
  IHotelListResponse,
} from './types';

/** 获取酒店列表 */
export async function getHotelList(params?: IHotelListRequest): Promise<IHotelListResponse> {
  return get<IHotelListResponse>('/hotels', params);
}

/** 获取预订选项列表 */
export async function getBookingOptions(
  params?: IBookingOptionsRequest
): Promise<IBookingOptionsResponse> {
  return get<IBookingOptionsResponse>('/booking-options', params);
}