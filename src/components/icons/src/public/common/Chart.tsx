import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const Chart = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 25 26" width={size} height={size}>
        <G fill="#fff" clipPath="url(#chart_svg__a)">
          <Path d="M17.46 7.09v4.12a.59.59 0 0 1-.6.57.577.577 0 0 1-.59-.57V7.64H7.19v10h3.72a.57.57 0 0 1 .59.57.59.59 0 0 1-.59.57H6.6a.59.59 0 0 1-.6-.58V7.09a.6.6 0 0 1 .17-.42.6.6 0 0 1 .43-.17h10.26a.6.6 0 0 1 .43.17.6.6 0 0 1 .17.42m-3.24 3.12a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1zm-3.09 2.61a.49.49 0 0 0 .51-.48.5.5 0 0 0-.51-.49H8.2a.5.5 0 0 0 0 1z" />
          <Path d="m17.352 15.009-2.286-2.35a.523.523 0 0 0-.745-.003.542.542 0 0 0-.003.758l1.36 1.4h-4.15a.53.53 0 0 0-.526.536H11a.53.53 0 0 0 .526.537h4.193l-1.396 1.39a.546.546 0 0 0 .161.88.52.52 0 0 0 .406.005.5.5 0 0 0 .171-.114l2.285-2.275a.546.546 0 0 0 .006-.764" />
        </G>
        <Defs>
          <ClipPath id="chart_svg__a">
            <Path fill="#fff" d="M6 6.5h13v13H6z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default Chart;
