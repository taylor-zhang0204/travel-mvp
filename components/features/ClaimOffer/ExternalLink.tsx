import { ArrowUpRight } from '@tamagui/lucide-icons-2';
import { XStack, Text } from 'tamagui';

const ExternalLink = () => {
  return (
    <XStack style={{ alignItems: 'center' }} gap={7}>
      <Text fontSize={15} fontWeight="500" color="#1566d1">
        Go to hotel booking site
      </Text>
      <ArrowUpRight size={15} color="#1566d1" />
    </XStack>
  );
};

export default ExternalLink;