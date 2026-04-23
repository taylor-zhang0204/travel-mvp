import QRCode from 'react-native-qrcode-svg';
import { Text, XStack, YStack } from 'tamagui';

import CopyButton from '@/src/components/ui/CopyButton';
import DownloadButton from '@/src/components/ui/DownloadButton';

const ClaimReferenceCard = () => {
  return (
    <YStack bg="#f5f7fa" borderWidth={1.8} borderColor="#1566d1" px={17} py={9} gap={7} rounded={9}>
      <Text fontSize={13} fontWeight="500" color="#364153">
        Reference code*
      </Text>
      <XStack gap={7.4} items="center">
        <Text fontSize={18} fontWeight="700" color="#101828">
          KODY1234
        </Text>
        <CopyButton value="KODY1234" />
      </XStack>
      <XStack gap={7} items="flex-end">
        <DownloadButton>
          <QRCode value="KODY1234" size={80} />
        </DownloadButton>
      </XStack>
      <Text fontSize={10} color="#747d8b">
        *This is only applicable to the standard rate.
      </Text>
    </YStack>
  );
};

export default ClaimReferenceCard;
