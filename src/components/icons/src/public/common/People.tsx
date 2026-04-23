import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const People = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 18 18" width={size} height={size}>
        <Path
          stroke="#9CA3AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15.75v-1.5a3 3 0 0 0-3-3H4.5a3 3 0 0 0-3 3v1.5M6.75 8.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16.5 15.75v-1.5a3 3 0 0 0-2.25-2.903M12 2.347a3 3 0 0 1 0 5.813"
        />
      </Svg>
    </Pressable>
  );
};

export default People;
