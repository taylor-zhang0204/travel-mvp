// ==================== 酒店相关类型 ====================

// 酒店列表参数
export interface HotelListParams {
  city?: string;           // 城市
  checkInDate?: string;    // 入住日期 YYYY-MM-DD
  checkOutDate?: string;   // 退房日期 YYYY-MM-DD
  page?: number;           // 页码
  pageSize?: number;       // 每页数量
  star?: number;           // 星级 3/4/5
  minPrice?: number;       // 最低价格
  maxPrice?: number;       // 最高价格
  keyword?: string;        // 关键词搜索
}

// 酒店详情
export interface Hotel {
  id: number;
  name: string;
  city: string;
  address: string;
  star: number;
  rating: number;
  reviewCount: number;
  price: number;
  thumbnail: string;
  facilities: string[];    // 设施 ['wifi', 'parking', 'pool']
}

// 酒店列表响应
export interface HotelListResponse {
  list: Hotel[];
  total: number;
  page: number;
  pageSize: number;
}

// ==================== 预订相关类型 ====================

// 预订参数
export interface BookingParams {
  hotelId: number;         // 酒店ID
  roomId: number;          // 房间ID
  checkInDate: string;     // 入住日期 YYYY-MM-DD
  checkOutDate: string;    // 退房日期 YYYY-MM-DD
  guestName: string;       // 入住人姓名
  guestPhone: string;      // 入住人电话
  guestIdCard: string;     // 入住人身份证
  remark?: string;         // 备注
}

// 预订响应
export interface BookingResponse {
  orderId: string;         // 订单号
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}

// 取消预订响应
export interface CancelBookingResponse {
  success: boolean;
}
