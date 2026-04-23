import type { ReactNode } from 'react';
import { Text, YStack } from 'tamagui';

interface SearchSectionProps {
  title: string;
  gap?: number;
  pt?: number;
  children: ReactNode;
}

export const SearchSection = ({ title, gap = 8, pt, children }: SearchSectionProps) => (
  <YStack gap={12} pt={pt}>
    <Text fontSize={14} fontWeight="600" color="#4a5565" textTransform="uppercase">
      {title}
    </Text>
    <YStack gap={gap}>{children}</YStack>
  </YStack>
);
