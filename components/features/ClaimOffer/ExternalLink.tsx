import { Text, XStack } from 'tamagui';

import { ArrowUpRightFromSquare } from '@/components/icons/src/public/common';
import { openExternalLink } from '@/utils';

const ExternalLink = ({ url }: { url: string }) => {
  return (
    <XStack items="center" gap={7} onPress={() => openExternalLink(url)}>
      <Text fontSize={15} fontWeight="500" color="#1566d1">
        Go to hotel booking site
      </Text>
      <ArrowUpRightFromSquare size={15} color="#1566d1" />
    </XStack>
  );
};

export default ExternalLink;
