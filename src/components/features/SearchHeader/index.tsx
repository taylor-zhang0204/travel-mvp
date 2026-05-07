import { ChevronLeft, Search } from '@tamagui/lucide-icons-2';
import { useRouter } from 'expo-router';
import { Text, XStack, YStack } from 'tamagui';

import { colors } from '@/src/styles/theme';
import { safeGoBack } from '@/src/utils/navigation';

type Props = {
  destination?: string;
  dateRange?: string;
};

export default function SearchHeader({ destination = '', dateRange = '' }: Props) {
  const router = useRouter();

  return (
    <YStack
      bg={colors.white}
      borderBottomWidth={1}
      borderBottomColor={colors.border}
      px={14}
      py={11}
    >
      <XStack bg={colors.white} height={42} gap={11} rounded={12}>
        {/* Back Button */}
        <YStack justify="center" onPress={() => safeGoBack(router)}>
          <ChevronLeft size={22} color={colors.textBlack} />
        </YStack>

        {/* Search Input Container */}
        <XStack
          flex={1}
          borderWidth={1}
          borderColor={colors.borderDivider}
          px={8}
          py={12}
          gap={11}
          rounded={10}
          items="center"
          overflow="hidden"
        >
          <Search size={12} color={colors.textSearchHint} />
          <Text flex={1} numberOfLines={1} fontSize={13} color={colors.textBody}>
            {destination} {dateRange}
          </Text>
        </XStack>
      </XStack>
    </YStack>
  );
}
