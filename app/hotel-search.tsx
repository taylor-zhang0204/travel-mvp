import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, YStack, useDebounceValue } from 'tamagui';

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
import { Empty } from '@/src/components/ui/Empty';

export default function HotelSearch() {
  const { t } = useTranslation();
  const { recentSearches, selectHotel } = useHotelSearch();
  const [searchHotel, setSearchHotel] = useState<string>('');

  const debouncedSearchHotel = useDebounceValue(searchHotel, 300);

  const filteredHotels = POPULAR_HOTELS.filter((hotel) =>
    hotel.name.toLowerCase().includes(debouncedSearchHotel.toLowerCase())
  );

  const hasSearch = debouncedSearchHotel.length > 0;

  return (
    <YStack flex={1} bg="#fff">
      <Header
        title={
          <Text fontSize={20} fontWeight="500" color="#101828">
            {t('hotelSearch.title')}
          </Text>
        }
        right={<Text />}
      />
      <ScrollView flex={1}>
        <YStack px={16} pt={16} gap={16}>
          <SearchInput value={searchHotel} onChangeText={setSearchHotel} />

          {hasSearch ? (
            <>
              {filteredHotels.length === 0 ? (
                <Empty
                  title={t('hotelSearch.noHotelsFound')}
                  description={t('hotelSearch.noResultsMatch', { query: debouncedSearchHotel })}
                />
              ) : (
                filteredHotels.map((hotel, index) => (
                  <Fragment key={hotel.name}>
                    {index > 0 ? <Divider /> : null}
                    <HotelListItem
                      title={hotel.name}
                      subtitle={hotel.location}
                      height={72}
                      icon={<Location size={20} color="#1566D1" />}
                      iconBg="#e8f3ff"
                      onPress={() => selectHotel(hotel.name)}
                    />
                  </Fragment>
                ))
              )}
            </>
          ) : (
            <>
              {recentSearches.length > 0 ? (
                <>
                  <SearchSection title={t('hotelSearch.recentSearches')}>
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

              <SearchSection title={t('hotelSearch.popularHotels')} gap={4} pt={4}>
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
            </>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  );
}
