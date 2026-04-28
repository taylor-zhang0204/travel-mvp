import { StarFull } from '@tamagui/lucide-icons-2';
import { XStack, YStack } from 'tamagui';

type Props = {
  count: number; // 0-5, supports decimals (e.g., 3.5, 4.3, 4.7)
  size?: number;
};

const TOTAL_STARS = 5;

/**
 * Round to nearest 0.5 for star display:
 * - 4.0-4.24 → 4.0 (4 stars)
 * - 4.25-4.74 → 4.5 (4.5 stars)
 * - 4.75-5.0 → 5.0 (5 stars)
 */
const roundToHalf = (num: number): number => {
  return Math.round(num * 2) / 2;
};

const Rate = ({ count, size = 12 }: Props) => {
  const roundedCount = roundToHalf(count);
  const stars = [];

  for (let i = 1; i <= TOTAL_STARS; i++) {
    if (roundedCount >= i) {
      // Full star - fully filled
      stars.push(<StarFull key={i} size={size} color="#F59E0B" />);
    } else if (roundedCount >= i - 0.5) {
      // Half star - filled left half, gray right half
      stars.push(
        <YStack key={i} width={size} height={size} position="relative">
          {/* Gray background star (empty half) */}
          <StarFull size={size} color="#D1D5DB" />
          {/* Gold star clipped to left half */}
          <YStack position="absolute" overflow="hidden" width="50%" height="100%">
            <StarFull size={size} color="#F59E0B" />
          </YStack>
        </YStack>
      );
    } else {
      // No star - fully gray
      stars.push(<StarFull key={i} size={size} color="#D1D5DB" />);
    }
  }

  return <XStack gap={3}>{stars}</XStack>;
};

export default Rate;
