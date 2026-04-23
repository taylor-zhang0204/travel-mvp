import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const Calendar = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 16 16" width={size} height={size}>
        <G
          stroke="#9CA3AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.333}
          clipPath="url(#calendar_svg__a)"
        >
          <Path d="M5.334 1.333V4M10.666 1.333V4M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333M2 6.667h12" />
        </G>
        <Defs>
          <ClipPath id="calendar_svg__a">
            <Path fill="#fff" d="M0 0h16v16H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default Calendar;
