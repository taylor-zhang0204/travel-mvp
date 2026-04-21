import { ChevronLeft, Search } from '@tamagui/lucide-icons-2';
import { router } from 'expo-router';
import { Text, XStack, YStack } from 'tamagui';

type Props = {
  destination?: string;
  dateRange?: string;
};

export default function SearchHeader({ destination = '', dateRange = '' }: Props) {
  return (
    <YStack bg="#fff" borderBottomWidth={1} borderBottomColor="#E5E7EB" px={14} py={11}>
      <XStack bg="#fff" height={42} gap={11} rounded={12}>
        {/* Back Button */}
        <YStack justify="center" onPress={() => router.back()}>
          <ChevronLeft size={22} color="#000" />
        </YStack>

        {/* Search Input Container */}
        <XStack
          flex={1}
          borderWidth={1}
          borderColor="#d1d5dc"
          px={8}
          py={12}
          gap={11}
          rounded={10}
          items="center"
          overflow="hidden"
        >
          <Search size={12} color="#99a1af" />
          <Text flex={1} numberOfLines={1} fontSize={13} color="#0a0a0a">
            {destination} {dateRange}
          </Text>
        </XStack>
      </XStack>
    </YStack>
  );
}
