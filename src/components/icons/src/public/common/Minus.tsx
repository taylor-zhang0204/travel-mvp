import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const Minus = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 30 30" width={size} height={size}>
        <Path
          fill="#1566D1"
          d="M8.5 5.75H21c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.367-1.133 2.5-2.5 2.5H8.5a2.52 2.52 0 0 1-2.5-2.5V8.25c0-1.367 1.133-2.5 2.5-2.5m2.813 7.813a.95.95 0 0 0-.938.937c0 .508.43.938.938.938h6.874a.95.95 0 0 0 .938-.938.95.95 0 0 0-.937-.937z"
        />
      </Svg>
    </Pressable>
  );
};

export default Minus;
