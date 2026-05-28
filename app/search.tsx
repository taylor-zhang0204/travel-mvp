import { useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { ScrollView, Spinner, YStack } from 'tamagui';

import { getBookingOptions } from '@/src/api/hotel';
import type { IHotelBookingOptionsResponse } from '@/src/api/hotel/types';
import ExclusiveOffer from '@/src/components/features/ExclusiveOffer';
import Footer from '@/src/components/features/Layout/Footer';
import SearchHeader from '@/src/components/features/SearchHeader';
import { colors } from '@/src/styles';
import type { SearchParams } from '@/src/types/page';

const Search = () => {
  const searchParams = useLocalSearchParams();

  const [hotelInfo, sethotelInfo] = useState<IHotelBookingOptionsResponse>();

  const params = useMemo<SearchParams>(() => {
    const {
      hotelId = '',
      destination = '',
      checkIn = '',
      checkOut = '',
      guests = '',
      rooms = '',
    } = searchParams;
    return {
      hotelId: String(hotelId),
      destination: String(destination),
      checkIn: String(checkIn),
      checkOut: String(checkOut),
      guests: Number(guests),
      rooms: Number(rooms),
    };
  }, [searchParams]);

  const fetchHotelInfo = async () => {
    if (params?.checkIn) {
      const { guests, hotelId, checkIn, checkOut } = params;
      const requestParams = {
        hotelId,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        guestNumber: guests,
      };
      const info = await getBookingOptions(requestParams);
      console.log('hotelInfo: ', info);
      sethotelInfo(info);
    }
  };

  useEffect(() => {
    if (params?.checkIn) {
      fetchHotelInfo();
    }
  }, [params]);

  return (
    <YStack flex={1} bg={colors.backgroundPage}>
      <SearchHeader
        destination={params?.destination}
        dateRange={`${params?.checkIn} - ${params?.checkOut}`}
      />
      <ScrollView flex={1}>
        {hotelInfo ? (
          <ExclusiveOffer
            destination={params?.destination}
            guests={params?.guests}
            rooms={params?.rooms}
            info={hotelInfo}
          />
        ) : (
          <YStack height={200} justify="center" items="center">
            <Spinner size="large" />
          </YStack>
        )}
        <Footer />
      </ScrollView>
    </YStack>
  );
};

export default Search;
