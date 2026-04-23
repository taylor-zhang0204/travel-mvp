import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/src/components/icons/types';

const PlusDisabled = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 30 30" width={size} height={size}>
        <Path
          fill="#CDD7E4"
          d="M8.5 7c-.703 0-1.25.547-1.25 1.25v12.5c0 .703.547 1.25 1.25 1.25H21c.703 0 1.25-.547 1.25-1.25V8.25C22.25 7.547 21.703 7 21 7zM6 8.25c0-1.367 1.133-2.5 2.5-2.5H21c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.367-1.133 2.5-2.5 2.5H8.5a2.52 2.52 0 0 1-2.5-2.5zm8.125 10v-3.125H11a.617.617 0 0 1-.625-.625c0-.352.273-.625.625-.625h3.125V10.75c0-.352.273-.625.625-.625s.625.273.625.625v3.125H18.5c.352 0 .625.273.625.625a.617.617 0 0 1-.625.625h-3.125v3.125a.617.617 0 0 1-.625.625.617.617 0 0 1-.625-.625"
        />
      </Svg>
    </Pressable>
  );
};

export default PlusDisabled;
