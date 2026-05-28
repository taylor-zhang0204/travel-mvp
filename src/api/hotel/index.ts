import { get } from '@/src/api/base';

import type {
  IBookingOptionsRequest,
  IHotelBookingOptionsResponse,
  IHotelListRequest,
  IHotelListResponse,
} from './types';

/** 获取酒店列表 */
export async function getHotelList(params?: IHotelListRequest): Promise<IHotelListResponse> {
  return get<IHotelListResponse>('/hotels', params);
}

/** 获取酒店预订选项 */
export async function getBookingOptions(
  params: IBookingOptionsRequest
): Promise<IHotelBookingOptionsResponse> {
  return get<IHotelBookingOptionsResponse>('/booking-options', params);
}