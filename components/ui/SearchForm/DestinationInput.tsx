import { useState } from 'react';
import { Input, Text, XStack, YStack } from 'tamagui';

import { Location } from '@/components/icons/src/public/common';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const DestinationInput = ({ value, onChangeText, placeholder = 'Langham, Hong Kong' }: Props) => {
  const [focused, setFocused] = useState(false);

  return (
    <YStack gap={6}>
      <Text fontSize={13} fontWeight="500" style={{ color: '#003064' }} letterSpacing={-0.2}>
        Destination
      </Text>
      <XStack
        height={45}
        bg="#F5F7FA"
        px={16}
        borderWidth={1}
        borderColor={focused ? '#1566D1' : 'rgba(255,255,255,0.1)'}
        style={{ borderRadius: 12, alignItems: 'center' }}
      >
        <Location size={18} />
        <Input
          flex={1}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            backgroundColor: 'transparent',
          }}
          borderWidth={0}
          fontSize={15}
        />
      </XStack>
    </YStack>
  );
};

export default DestinationInput;
