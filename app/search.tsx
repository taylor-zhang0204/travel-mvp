import { useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { ScrollView, YStack } from 'tamagui';

import { search, SearchHotelResponse } from '@/src/api/examples';
import ExclusiveOffer from '@/src/components/features/ExclusiveOffer';
import Footer from '@/src/components/features/Layout/Footer';
import SearchHeader from '@/src/components/features/SearchHeader';
import { colors } from '@/src/styles';
import type { SearchParams } from '@/src/types/page';

const Search = () => {
  const searchParams = useLocalSearchParams();

  const [hotelInfo, sethotelInfo] = useState<SearchHotelResponse['hotel']>();

  const params = useMemo<SearchParams>(() => {
    const { destination = '', checkIn = '', checkOut = '', guests = '', rooms = '' } = searchParams;
    return {
      destination: String(destination),
      checkIn: String(checkIn),
      checkOut: String(checkOut),
      guests: Number(guests),
      rooms: Number(rooms),
    };
  }, [searchParams]);

  const fetchHotelInfo = async () => {
    if (params?.checkIn) {
      const { hotel } = await search(params);
      sethotelInfo(hotel);
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
        <ExclusiveOffer
          destination={params?.destination}
          checkIn={params?.checkIn}
          checkOut={params?.checkOut}
          guests={params?.guests}
          rooms={params?.rooms}
          info={hotelInfo}
        />
        <Footer />
      </ScrollView>
    </YStack>
  );
};

export default Search;
