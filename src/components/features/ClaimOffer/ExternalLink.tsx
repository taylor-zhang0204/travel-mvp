import { useTranslation } from 'react-i18next';
import { Text, XStack } from 'tamagui';

import { ArrowUpRightFromSquare } from '@/src/components/icons/src/public/common';
import { openExternalLink } from '@/src/utils';

const ExternalLink = ({ url }: { url: string }) => {
  const { t } = useTranslation();
  return (
    <XStack items="center" gap={7} onPress={() => openExternalLink(url)}>
      <Text fontSize={15} fontWeight="500" color="#1566d1">
        {t('claim.goToBookingSite')}
      </Text>
      <ArrowUpRightFromSquare size={15} color="#1566d1" />
    </XStack>
  );
};

export default ExternalLink;
