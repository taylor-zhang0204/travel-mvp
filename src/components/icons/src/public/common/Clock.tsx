import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const Clock = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 20 20" width={size} height={size}>
        <Path
          stroke="#77889B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.667}
          d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666"
        />
        <Path
          stroke="#77889B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.667}
          d="M10 5v5l3.333 1.667"
        />
      </Svg>
    </Pressable>
  );
};

export default Clock;
