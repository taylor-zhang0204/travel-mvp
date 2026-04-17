import { StarFull, StarHalf } from '@tamagui/lucide-icons-2';
import { XStack } from 'tamagui';

type Props = {
  count: number; // 0-5, supports half (e.g., 3.5)
  size?: number;
};

const TOTAL_STARS = 5;

// TODO: 目前半星图标和预期不符，需要替换

const Rate = ({ count, size = 12 }: Props) => {
  const stars = [];

  for (let i = 1; i <= TOTAL_STARS; i++) {
    if (count >= i) {
      // Full star
      stars.push(<StarFull key={i} size={size} color="#F59E0B" />);
    } else if (count >= i - 0.5) {
      // Half star
      stars.push(<StarHalf key={i} size={size} color="#F59E0B" />);
    }
    // No star for count < i - 0.5
  }

  return <XStack gap={3.7}>{stars}</XStack>;
};

export default Rate;
