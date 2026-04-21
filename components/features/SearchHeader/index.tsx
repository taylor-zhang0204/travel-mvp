import { ChevronLeft, Search } from '@tamagui/lucide-icons-2';
import { router } from 'expo-router';
import { Text, XStack, YStack } from 'tamagui';

type Props = {
  destination?: string;
  dateRange?: string;
};

export default function SearchHeader({ destination = '', dateRange = '' }: Props) {
  return (
    <YStack bg="$color1" borderBottomWidth={1} borderBottomColor="$color4" px={14} py={11}>
      <XStack bg="$color1" height={42} gap={11} rounded={12}>
        {/* Back Button */}
        <YStack justify="center" onPress={() => router.back()}>
          <ChevronLeft size={22} color="$color12" />
        </YStack>

        {/* Search Input Container */}
        <XStack
          flex={1}
          borderWidth={1}
          borderColor="$color5"
          px={8}
          py={12}
          gap={11}
          rounded={10}
          items="center"
          overflow="hidden"
        >
          <Search size={12} color="$color8" />
          <Text flex={1} numberOfLines={1} fontSize={13} color="$color12">
            {destination} {dateRange}
          </Text>
        </XStack>
      </XStack>
    </YStack>
  );
}
