import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const ArrowUpRightFromSquare = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 15 15" width={size} height={size}>
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.232}
          d="M9.236 1.847h3.695v3.695M6.158 8.62l6.774-6.773M11.084 8.005V11.7a1.23 1.23 0 0 1-1.231 1.231H3.079A1.23 1.23 0 0 1 1.848 11.7V4.926a1.23 1.23 0 0 1 1.231-1.231h3.695"
        />
      </Svg>
    </Pressable>
  );
};

export default ArrowUpRightFromSquare;
