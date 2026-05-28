import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, YStack, useDebounceValue } from 'tamagui';

import { getHotelList } from '@/src/api/hotel';
import type { IHotelListResponse } from '@/src/api/hotel/types';
import {
  HotelListItem,
  SearchInput,
  SearchSection,
  useHotelSearch,
} from '@/src/components/features/HotelSearch';
import Header from '@/src/components/features/Layout/Header';
import { Clock, Location } from '@/src/components/icons/src/public/common';
import Divider from '@/src/components/ui/Divider';
import { Empty } from '@/src/components/ui/Empty';
import { colors } from '@/src/styles';

export default function HotelSearch() {
  const { t } = useTranslation();
  const { recentSearches, selectHotel } = useHotelSearch();
  const [searchHotel, setSearchHotel] = useState<string>('');
  const [hotels, setHotels] = useState<IHotelListResponse['items']>([]);

  const debouncedSearchHotel = useDebounceValue(searchHotel, 300);

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(debouncedSearchHotel.toLowerCase())
  );

  const fetchHotels = async () => {
    const { items } = await getHotelList();
    console.log('fetchHotels: ', items);
    setHotels(items);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const hasSearch = debouncedSearchHotel.length > 0;

  return (
    <YStack flex={1} bg={colors.white}>
      <Header
        title={
          <Text fontSize={20} fontWeight="500" color={colors.textPrimary}>
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
                      subtitle={hotel.address}
                      height={72}
                      icon={<Location size={20} color={colors.primary} />}
                      iconBg={colors.primaryLightBg}
                      onPress={() => selectHotel(hotel)}
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
                        onPress={() => selectHotel(hotel)}
                      />
                    ))}
                  </SearchSection>
                  <Divider />
                </>
              ) : null}

              <SearchSection title={t('hotelSearch.popularHotels')} gap={4} pt={4}>
                {hotels.map((hotel) => (
                  <HotelListItem
                    key={hotel.name}
                    title={hotel.name}
                    subtitle={hotel.address}
                    height={72}
                    icon={<Location size={20} color={colors.primary} />}
                    iconBg={colors.primaryLightBg}
                    onPress={() => selectHotel(hotel)}
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
