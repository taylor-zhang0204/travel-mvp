import { router } from 'expo-router';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import type { IHotelItem } from '@/src/api/hotel/types';
import { recentSearchesAtom, selectedHotelAtom } from '@/src/store/hotel';
import { safeGoBack } from '@/src/utils/navigation';
import Storage from '@/src/utils/storage';

export const useHotelSearch = () => {
  const [recentSearches, setRecentSearches] = useAtom(recentSearchesAtom);
  const setSelectedHotel = useSetAtom(selectedHotelAtom);

  useEffect(() => {
    (async () => {
      const recent = await Storage.get('recent-searches');
      if (!recent) {
        Storage.set('recent-searches', []);
      }
    })();
  }, []);

  const selectHotel = ({ hotelId, name, address }: IHotelItem) => {
    const updated = [
      { hotelId, name, address },
      ...recentSearches.filter((h) => h.name !== name),
    ].slice(0, 5);
    setRecentSearches(updated);
    setSelectedHotel({
      hotelId,
      name,
      address,
    });
    safeGoBack(router);
  };

  return { recentSearches, selectHotel };
};
