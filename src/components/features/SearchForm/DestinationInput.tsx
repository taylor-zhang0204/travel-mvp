import { router } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, XStack, YStack } from 'tamagui';

import { Location } from '@/src/components/icons/src/public/common';

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
      <Text fontSize={13} fontWeight="500" style={{ color: '#003064' }} letterSpacing={-0.2}>
        {t('searchForm.destination')}
      </Text>
      <XStack
        height={45}
        bg="#F5F7FA"
        px={16}
        gap={8}
        borderWidth={1}
        borderColor="rgba(255,255,255,0.1)"
        rounded={12}
        items="center"
        onPress={goSearchHotel}
        pressStyle={{ opacity: 0.7 }}
      >
        <Location size={18} color="#9CA3AF" />
        <Text flex={1} fontSize={16} color={isEmpty ? '#9CA3AF' : '#56708B'} numberOfLines={1}>
          {isEmpty ? placeholder : value}
        </Text>
      </XStack>
    </YStack>
  );
};

export default DestinationInput;
