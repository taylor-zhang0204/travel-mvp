import type { ReactNode } from 'react';
import type { GetProps } from 'tamagui';
import { Circle, Text, XStack, YStack } from 'tamagui';

import { colors } from '@/src/styles/theme';

interface HotelListItemProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  iconBg?: GetProps<typeof XStack>['bg'];
  height?: number;
  onPress?: () => void;
}

export const HotelListItem = ({
  title,
  subtitle,
  icon,
  iconBg = colors.backgroundInput,
  height = 64,
  onPress,
}: HotelListItemProps) => (
  <XStack height={height} px={12} gap={12} rounded={10} items="center" onPress={onPress}>
    <Circle size={40} bg={iconBg}>
      {icon}
    </Circle>
    {subtitle ? (
      <YStack flex={1} gap={4}>
        <Text fontSize={16} fontWeight="500" color={colors.textPrimary} numberOfLines={1}>
          {title}
        </Text>
        <Text fontSize={14} fontWeight="500" color={colors.textMuted}>
          {subtitle}
        </Text>
      </YStack>
    ) : (
      <Text flex={1} fontSize={16} fontWeight="500" color={colors.textPrimary} numberOfLines={1}>
        {title}
      </Text>
    )}
  </XStack>
);
