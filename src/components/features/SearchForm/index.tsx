import dayjs from 'dayjs';
import { router } from 'expo-router';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { YStack } from 'tamagui';

import { selectedHotelAtom } from '@/src/store/hotel';
import { colors } from '@/src/styles/theme';
import { SearchParams } from '@/src/types/page';
import { SCREEN_WIDTH } from '@/src/utils/screen';

import DateRangeSection from './DateRangeSection';
import DestinationInput from './DestinationInput';
import RoomsGuestsInput from './RoomsGuestsInput';
import SearchButton from './SearchButton';

type Props = {
  onSearch?: (params: SearchParams) => void;
};

const DEFAULT_HOTEL = {
  hotelId: 'ChgI_KC-8vCrstqdARoLL2cvMTU1cWZxMDMQAQ',
  destination: 'The Langham, Hong Kong',
} as const;

const SearchForm = ({ onSearch }: Props) => {
  const hotelInfo = useAtomValue(selectedHotelAtom);

  const [params, setParams] = useState<SearchParams>({
    hotelId: hotelInfo?.hotelId || DEFAULT_HOTEL.hotelId,
    destination: hotelInfo?.name || DEFAULT_HOTEL.destination,
    checkIn: dayjs().format('YYYY-MM-DD'),
    checkOut: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    rooms: 1,
    guests: 2,
  });

  useEffect(() => {
    if (hotelInfo?.name) {
      setParams((p) => ({ ...p, hotelId: hotelInfo.hotelId || '', destination: hotelInfo.name }));
    }
  }, [hotelInfo]);

  const onRoomsChange = (rooms: number) =>
    setParams((p) => ({ ...p, guests: Math.max(p.guests, rooms), rooms }));

  const onGuestsChange = (guests: number) =>
    setParams((p) => ({ ...p, guests, rooms: guests < p.rooms ? guests : p.rooms }));

  const onDateRangeChange = (range: { startDate: string; endDate: string }) => {
    setParams((p) => ({ ...p, checkIn: range.startDate, checkOut: range.endDate }));
  };

  const handleSearch = () => {
    onSearch?.(params);
    router.push({
      pathname: '/search',
      params,
    });
  };

  const isSearchDisabled = !params.destination;

  return (
    <YStack width={SCREEN_WIDTH - 50} px={14} py={20} bg={colors.white} gap={16} rounded={12}>
      <DestinationInput value={params.destination} />

      <DateRangeSection
        checkIn={params.checkIn}
        checkOut={params.checkOut}
        onDateRangeChange={onDateRangeChange}
      />

      <RoomsGuestsInput
        rooms={params.rooms}
        guests={params.guests}
        onRoomsChange={(rooms) => onRoomsChange(rooms)}
        onGuestsChange={(guests) => onGuestsChange(guests)}
      />

      <SearchButton onPress={handleSearch} disabled={isSearchDisabled} />
    </YStack>
  );
};

export default SearchForm;
