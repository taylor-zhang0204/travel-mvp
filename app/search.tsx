import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, YStack } from 'tamagui';

// import { search } from '@/api/examples';
import ExclusiveOffer from '@/components/features/ExclusiveOffer';
import Footer from '@/components/features/Layout/Footer';
import SearchHeader from '@/components/features/SearchHeader';
import type { SearchParams } from '@/types/page';

const Search = () => {
  const searchParams = useLocalSearchParams();
  const [params, setParams] = useState<SearchParams>();

  useEffect(() => {
    const { destination = '', checkIn = '', checkOut = '', guests = '', rooms = '' } = searchParams;
    setParams({
      destination: String(destination),
      checkIn: String(checkIn),
      checkOut: String(checkOut),
      guests: Number(guests),
      rooms: Number(rooms),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(searchParams)]);

  // useEffect(() => {
  //   if (params?.checkIn) {
  //     search(params).then((res) => console.log(res));
  //   }
  // }, [params?.checkIn]);

  return (
    <YStack flex={1} bg="#F7F9FD">
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
        />
        <Footer />
      </ScrollView>
    </YStack>
  );
};

export default Search;
