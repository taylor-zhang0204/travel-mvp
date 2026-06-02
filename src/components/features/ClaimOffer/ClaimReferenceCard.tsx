import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import QRCode from 'react-native-qrcode-svg';
import { Text, XStack, YStack } from 'tamagui';

import CopyButton from '@/src/components/ui/CopyButton';
import DownloadButton from '@/src/components/ui/DownloadButton';
import { colors } from '@/src/styles/theme';

const generateReferenceCode = () => {
  const digits = Math.floor(1000 + Math.random() * 9000).toString();
  return `KODY${digits}`;
};

const ClaimReferenceCard = () => {
  const { t } = useTranslation();
  const referenceCode = useMemo(() => generateReferenceCode(), []);
  return (
    <YStack
      bg={colors.backgroundInput}
      borderWidth={1.8}
      borderColor={colors.primary}
      px={17}
      py={9}
      gap={7}
      rounded={9}
    >
      <Text fontSize={13} fontWeight="500" color={colors.textDark}>
        {t('claim.referenceCode')}
      </Text>
      <XStack gap={7.4} items="center">
        <Text fontSize={18} fontWeight="700" color={colors.textPrimary}>
          {referenceCode}
        </Text>
        <CopyButton value={referenceCode} />
      </XStack>
      <XStack gap={7} items="flex-end">
        <DownloadButton>
          <QRCode value={referenceCode} size={80} />
        </DownloadButton>
      </XStack>
      <Text fontSize={10} color={colors.textHint}>
        {t('claim.referenceNote')}
      </Text>
    </YStack>
  );
};

export default ClaimReferenceCard;
