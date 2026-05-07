import { useTranslation } from 'react-i18next';
import { Input, Text, YStack } from 'tamagui';

import { colors } from '@/src/styles/theme';

type Props = {
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  showEmailError?: boolean;
};

const ClaimEmailForm = ({ name, email, onNameChange, onEmailChange, showEmailError }: Props) => {
  const { t } = useTranslation();
  return (
    <YStack gap={14}>
      <Text fontSize={13} fontWeight="500" color={colors.textDark}>
        {t('claim.emailFormHint')}
      </Text>
      <YStack gap={4}>
        <Text fontSize={13} fontWeight="500" color={colors.textDark}>
          {t('claim.name')}
        </Text>
        <Input
          value={name}
          onChangeText={onNameChange}
          placeholder={t('claim.namePlaceholder')}
          bg={colors.backgroundInput}
          borderWidth={0.9}
          borderColor={colors.borderInput}
          placeholderTextColor="$color7"
          px={11}
          py={7}
          rounded={9}
          height={35}
          focusStyle={{ outline: 'none', borderColor: colors.borderInputFocus }}
          fontSize={16}
        />
        <Text fontSize={13} fontWeight="500" color={colors.textDark}>
          {t('claim.email')}
        </Text>
        <Input
          value={email}
          onChangeText={onEmailChange}
          placeholder={t('claim.emailPlaceholder')}
          bg={colors.backgroundInput}
          borderWidth={0.9}
          borderColor={colors.borderInput}
          placeholderTextColor="$color7"
          px={11}
          py={7}
          rounded={9}
          height={35}
          focusStyle={{ outline: 'none', borderColor: colors.borderInputFocus }}
          fontSize={16}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {showEmailError && (
          <Text fontSize={12} color={colors.error}>
            {t('claim.emailInvalid')}
          </Text>
        )}
      </YStack>
    </YStack>
  );
};

export default ClaimEmailForm;
