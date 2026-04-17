import { Copy, Download } from '@tamagui/lucide-icons-2';
import QRCode from 'react-native-qrcode-svg';
import { Text, XStack, YStack } from 'tamagui';

const ClaimReferenceCard = () => {
  return (
    <YStack
      bg="#f5f7fa"
      borderWidth={1.8}
      borderColor="#1566d1"
      px={17}
      py={9}
      gap={7}
      style={{ borderRadius: 9 }}
    >
      <Text fontSize={13} fontWeight="500" color="#364153">
        Reference code*
      </Text>
      <XStack gap={7.4} style={{ alignItems: 'center' }}>
        <Text fontSize={18} fontWeight="700" color="#101828">
          KODY1234
        </Text>
        <XStack gap={7} style={{ alignItems: 'center' }}>
          <Text fontSize={13} fontWeight="500" color="#1566d1">
            Copy
          </Text>
          <Copy size={15} color="#1566d1" />
        </XStack>
      </XStack>
      <XStack gap={7} style={{ alignItems: 'flex-end' }}>
        <QRCode value="KODY1234" size={80} />
        <XStack gap={7} style={{ alignItems: 'center' }}>
          <Text fontSize={13} fontWeight="500" color="#1566d1">
            Download
          </Text>
          <Download size={15} color="#1566d1" />
        </XStack>
      </XStack>
      <Text fontSize={10} color="#747d8b">
        *This is only applicable to the standard rate.
      </Text>
    </YStack>
  );
};

export default ClaimReferenceCard;
