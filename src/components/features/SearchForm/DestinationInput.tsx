import { router } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, XStack, YStack } from 'tamagui';

import { Location } from '@/src/components/icons/src/public/common';
import { colors } from '@/src/styles/theme';

type Props = {
  value: string;
  placeholder?: string;
};

const DestinationInput = ({ value, placeholder }: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Destination value: ', value);
  }, [value]);

  const goSearchHotel = () => {
    router.push('/hotel-search');
  };

  const isEmpty = !value;

  return (
    <YStack gap={6}>
      <Text
        fontSize={13}
        fontWeight="500"
        style={{ color: colors.primaryDark }}
        letterSpacing={-0.2}
      >
        {t('searchForm.destination')}
      </Text>
      <XStack
        height={45}
        bg={colors.backgroundInput}
        px={16}
        gap={8}
        borderWidth={1}
        borderColor={colors.border}
        rounded={12}
        items="center"
        onPress={goSearchHotel}
        pressStyle={{ opacity: 0.7 }}
      >
        <Location size={18} color={colors.textPlaceholder} />
        <Text
          flex={1}
          fontSize={16}
          color={isEmpty ? colors.textPlaceholder : colors.textTertiary}
          numberOfLines={1}
        >
          {isEmpty ? placeholder : value}
        </Text>
      </XStack>
    </YStack>
  );
};

export default DestinationInput;
