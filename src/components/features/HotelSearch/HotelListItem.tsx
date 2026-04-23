import type { ReactNode } from 'react';
import type { GetProps } from 'tamagui';
import { Text, XStack, YStack } from 'tamagui';

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
  iconBg = '#F5F7FA',
  height = 64,
  onPress,
}: HotelListItemProps) => (
  <XStack height={height} px={12} gap={12} rounded={10} items="center" onPress={onPress}>
    <XStack bg={iconBg} p={10} rounded={9999} items="center" justify="center">
      {icon}
    </XStack>
    {subtitle ? (
      <YStack flex={1} gap={4}>
        <Text fontSize={16} fontWeight="500" color="#101828" numberOfLines={1}>
          {title}
        </Text>
        <Text fontSize={14} fontWeight="500" color="#77889b">
          {subtitle}
        </Text>
      </YStack>
    ) : (
      <Text flex={1} fontSize={16} fontWeight="500" color="#101828" numberOfLines={1}>
        {title}
      </Text>
    )}
  </XStack>
);
