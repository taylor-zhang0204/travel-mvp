import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const Vision = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 24 24" width={size} height={size}>
        <Path
          fill="#000"
          fillRule="evenodd"
          d="M22.357 10.583C19.791 6.273 15.952 4 12 4S4.21 6.272 1.644 10.583a2.77 2.77 0 0 0 0 2.834C4.21 17.727 8.049 20 12 20c3.952 0 7.79-2.272 10.357-6.583.52-.873.52-1.961 0-2.834M11.553 8.894l-.812 1.624a.5.5 0 0 1-.223.223l-1.624.812a.5.5 0 0 0 0 .894l1.624.812a.5.5 0 0 1 .223.223l.812 1.624a.5.5 0 0 0 .894 0l.812-1.624a.5.5 0 0 1 .223-.223l1.624-.812a.5.5 0 0 0 0-.894l-1.624-.812a.5.5 0 0 1-.223-.223l-.812-1.624a.5.5 0 0 0-.894 0"
          clipRule="evenodd"
        />
      </Svg>
    </Pressable>
  );
};

export default Vision;
