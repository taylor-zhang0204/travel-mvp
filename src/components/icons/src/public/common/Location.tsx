import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const Location = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 18 18" width={size} height={size}>
        <G
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          clipPath="url(#location_svg__a)"
        >
          <Path d="M15 7.5c0 3.745-4.154 7.645-5.55 8.85a.75.75 0 0 1-.9 0C7.153 15.144 3 11.244 3 7.5a6 6 0 1 1 12 0" />
          <Path d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5" />
        </G>
        <Defs>
          <ClipPath id="location_svg__a">
            <Path fill="#fff" d="M0 0h18v18H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default Location;
