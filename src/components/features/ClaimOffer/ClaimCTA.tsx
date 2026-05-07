import { useTranslation } from 'react-i18next';
import { Button, Text } from 'tamagui';

import { colors } from '@/src/styles/theme';

type Props = {
  disabled?: boolean;
  onPress?: () => void;
};

const ClaimCTA = ({ disabled = false, onPress }: Props) => {
  const { t } = useTranslation();
  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      bg={disabled ? colors.buttonDisabledDark : colors.primary}
      px={124}
      py={11}
      justify="center"
      items="center"
      rounded={9}
      pressStyle={{
        borderWidth: 0,
      }}
    >
      <Text fontSize={15} fontWeight="500" color={colors.textWhite}>
        {t('claim.getCodes')}
      </Text>
    </Button>
  );
};

export default ClaimCTA;
