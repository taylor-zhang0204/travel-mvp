import { router } from 'expo-router';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { recentSearchesAtom, selectedHotelAtom } from '@/src/store/hotel';
import storage from '@/src/utils/storage';

import { defaultRecentSearches } from './constants';

export const useHotelSearch = () => {
  const [recentSearches, setRecentSearches] = useAtom(recentSearchesAtom);
  const setSelectedHotel = useSetAtom(selectedHotelAtom);

  useEffect(() => {
    (async () => {
      const recent = await storage.get('recent-searches');
      if (!recent) {
        storage.set('recent-searches', defaultRecentSearches);
      }
    })();
  }, []);

  const selectHotel = (name: string) => {
    const updated = [{ name }, ...recentSearches.filter((h) => h.name !== name)].slice(0, 5);
    setRecentSearches(updated);
    setSelectedHotel({ name });
    router.back();
  };

  return { recentSearches, selectHotel };
};
