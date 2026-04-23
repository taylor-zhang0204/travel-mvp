import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const Globe = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
        <G
          stroke="#4A5565"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.539}
          clipPath="url(#globe_svg__a)"
        >
          <Path d="M16.624 24.32a7.696 7.696 0 1 0 0-15.393 7.696 7.696 0 0 0 0 15.392" />
          <Path d="M16.625 8.927a11.16 11.16 0 0 0 0 15.392 11.16 11.16 0 0 0 0-15.392M8.928 16.624H24.32" />
        </G>
        <Defs>
          <ClipPath id="globe_svg__a">
            <Path fill="#fff" d="M7.389 7.388h18.47V25.86H7.39z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default Globe;
