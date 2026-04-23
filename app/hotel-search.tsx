import { ScrollView, Text, YStack } from 'tamagui';

import {
  HotelListItem,
  POPULAR_HOTELS,
  SearchInput,
  SearchSection,
  useHotelSearch,
} from '@/src/components/features/HotelSearch';
import Header from '@/src/components/features/Layout/Header';
import { Clock, Location } from '@/src/components/icons/src/public/common';
import Divider from '@/src/components/ui/Divider';

export default function HotelSearch() {
  const { recentSearches, selectHotel } = useHotelSearch();

  return (
    <YStack flex={1} bg="#fff">
      <Header
        title={
          <Text fontSize={20} fontWeight="500" color="#101828">
            Enter destination
          </Text>
        }
        right={<Text />}
      />
      <ScrollView flex={1}>
        <YStack px={16} pt={16} gap={16}>
          <SearchInput />

          {recentSearches.length > 0 ? (
            <>
              <SearchSection title="Recent Searches">
                {recentSearches.map((hotel) => (
                  <HotelListItem
                    key={hotel.name}
                    title={hotel.name}
                    icon={<Clock size={20} />}
                    onPress={() => selectHotel(hotel.name)}
                  />
                ))}
              </SearchSection>
              <Divider />
            </>
          ) : null}

          <SearchSection title="Popular Hotels" gap={4} pt={4}>
            {POPULAR_HOTELS.map((hotel) => (
              <HotelListItem
                key={hotel.name}
                title={hotel.name}
                subtitle={hotel.location}
                height={72}
                icon={<Location size={20} color="#1566D1" />}
                iconBg="#e8f3ff"
                onPress={() => selectHotel(hotel.name)}
              />
            ))}
          </SearchSection>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
