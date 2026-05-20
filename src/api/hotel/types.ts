// ==================== Hotel Scraper API 类型 ====================

// 酒店列表请求参数
export interface IHotelListRequest {
  page?: number;
  size?: number;
}

// 预订选项列表请求参数
export interface IBookingOptionsRequest {
  hotelId?: string;
  checkInDate?: string;
  checkOutDate?: string;
  page?: number;
  size?: number;
}

// 酒店信息
export interface IHotelItem {
  hotelId: string;
  name: string;
  address?: string;
  phoneNumber?: string;
  starRating?: number;
  userRating?: number;
  reviewCount?: number;
}

// 酒店列表响应
export interface IHotelListResponse {
  total: number;
  page: number;
  size: number;
  items: IHotelItem[];
}

// 预订选项信息
export interface IBookingOptionItem {
  id: number;
  hotelId: string;
  platform?: string;
  price?: string;
  priceValue?: number;
  currency?: string;
  checkInDate?: string;
  checkOutDate?: string;
  guestNumber?: number;
  roomType?: string;
  cancellationPolicy?: string;
  isSponsored: boolean;
  url?: string;
}

// 预订选项列表响应
export interface IBookingOptionsResponse {
  total: number;
  page: number;
  size: number;
  items: IBookingOptionItem[];
}