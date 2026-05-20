import type { ReactNode } from 'react';
import { Text, YStack } from 'tamagui';

import { colors } from '@/src/styles/theme';

interface ISearchSectionProps {
  title: string;
  gap?: number;
  pt?: number;
  children: ReactNode;
}

export const SearchSection = ({ title, gap = 8, pt, children }: ISearchSectionProps) => (
  <YStack gap={12} pt={pt}>
    <Text fontSize={14} fontWeight="600" color={colors.textSecondary} textTransform="uppercase">
      {title}
    </Text>
    <YStack gap={gap}>{children}</YStack>
  </YStack>
);
