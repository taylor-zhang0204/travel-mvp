import { useState } from 'react';
import { Input, Text, XStack, YStack, useTheme } from 'tamagui';

import { Location } from '@/components/icons/src/public/common';
import { palette } from '@/styles/palette';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const DestinationInput = ({ value, onChangeText, placeholder = 'Langham, Hong Kong' }: Props) => {
  const [focused, setFocused] = useState(false);
  const theme = useTheme();

  return (
    <YStack gap={6}>
      <Text fontSize={13} fontWeight="500" color="$color11" letterSpacing={-0.2}>
        Destination
      </Text>
      <XStack
        height={45}
        bg="$backgroundPress"
        px={16}
        borderWidth={1}
        rounded={12}
        items="center"
        style={{ borderColor: focused ? palette.brand : 'rgba(255,255,255,0.1)' }}
      >
        <Location size={18} color={theme.color8.val} />
        <Input
          flex={1}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          focusStyle={{
            outlineWidth: 0,
            outlineColor: 'transparent',
          }}
          bg="transparent"
          borderWidth={0}
          fontSize={16}
          color="$color12"
          placeholderTextColor="$color8"
        />
      </XStack>
    </YStack>
  );
};

export default DestinationInput;
