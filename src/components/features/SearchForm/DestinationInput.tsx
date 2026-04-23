import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Text, XStack, YStack } from 'tamagui';

import { Location } from '@/src/components/icons/src/public/common';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const DestinationInput = ({ value, onChangeText, placeholder }: Props) => {
  const { t } = useTranslation();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    console.log('Destination value: ', value);
  }, [value]);

  const goSearchHotel = () => {
    router.push('/hotel-search');
  };

  return (
    <YStack gap={6}>
      <Text fontSize={13} fontWeight="500" style={{ color: '#003064' }} letterSpacing={-0.2}>
        {t('searchForm.destination')}
      </Text>
      <XStack
        height={45}
        bg="#F5F7FA"
        px={16}
        borderWidth={1}
        borderColor={focused ? '#1566D1' : 'rgba(255,255,255,0.1)'}
        rounded={12}
        items="center"
      >
        <Location size={18} color="#9CA3AF" />
        <Input
          flex={1}
          value={value}
          disabled
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          focusStyle={{
            outlineWidth: 0,
            outlineColor: 'transparent',
          }}
          color={'#56708B'}
          bg="transparent"
          borderWidth={0}
          fontSize={16}
          onPress={() => goSearchHotel()}
        />
      </XStack>
    </YStack>
  );
};

export default DestinationInput;
