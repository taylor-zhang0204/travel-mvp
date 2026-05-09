import { StarFull } from '@tamagui/lucide-icons-2';
import { XStack, YStack } from 'tamagui';

import { colors } from '@/src/styles';

type Props = {
  count: number; // 0-5, supports decimals (e.g., 3.5, 4.3, 4.7)
  size?: number;
};

const TOTAL_STARS = 5;

/**
 * Get fill percentage for a specific star position
 * e.g., count=4.3: star 5 gets 30% fill
 */
const getFillPercent = (count: number, starIndex: number): number => {
  if (count >= starIndex) return 100;
  if (count <= starIndex - 1) return 0;
  return Math.round((count - (starIndex - 1)) * 100);
};

const Rate = ({ count, size = 12 }: Props) => {
  const stars = [];

  for (let i = 1; i <= TOTAL_STARS; i++) {
    const fillPercent = getFillPercent(count, i);

    if (fillPercent === 100) {
      stars.push(<StarFull key={i} size={size} color={colors.starFilled} />);
    } else if (fillPercent === 0) {
      stars.push(<StarFull key={i} size={size} color={colors.starEmpty} />);
    } else {
      // Partial fill
      stars.push(
        <YStack key={i} width={size} height={size} position="relative">
          <StarFull size={size} color={colors.starEmpty} />
          <YStack position="absolute" overflow="hidden" width={`${fillPercent}%`} height="100%">
            <StarFull size={size} color={colors.starFilled} />
          </YStack>
        </YStack>
      );
    }
  }

  return <XStack gap={3}>{stars}</XStack>;
};

export default Rate;
