import { useTranslation } from 'react-i18next';
import { Anchor, Text, XStack } from 'tamagui';

import { ArrowUpRightFromSquare } from '@/src/components/icons/src/public/common';

const ExternalLink = ({ url }: { url: string }) => {
  const { t } = useTranslation();
  return (
    <Anchor
      href={url}
      target="_blank"
      textDecorationLine="none"
      hoverStyle={{ textDecorationLine: 'none' }}
    >
      <XStack items="center" gap={7}>
        <Text fontSize={15} fontWeight="500" color="#1566d1">
          {t('claim.goToBookingSite')}
        </Text>
        <ArrowUpRightFromSquare size={15} color="#1566d1" />
      </XStack>
    </Anchor>
  );
};

export default ExternalLink;
