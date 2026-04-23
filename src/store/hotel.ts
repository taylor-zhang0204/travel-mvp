import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export interface Hotel {
  name: string;
  location?: string;
}

// 持久化 atom
export const recentSearchesAtom = atomWithStorage<Hotel[]>(
  'recent-searches',
  [],
  createJSONStorage(() => AsyncStorage)
);

// Selected hotel atom (not persisted, just for passing data between screens)
export const selectedHotelAtom = atom<Hotel | null>(null);
