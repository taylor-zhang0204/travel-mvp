import React from 'react';
import { XStack, YStack } from 'tamagui';

interface DividerProps {
  /**
   * Divider orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Divider color
   * @default '$gray5'
   */
  color?: string;

  /**
   * Divider thickness in pixels
   * @default 1
   */
  thickness?: number;

  /**
   * Divider length (for vertical: height, for horizontal: width)
   */
  length?: number | string;

  /**
   * Margin around divider
   */
  margin?: number | string;

  /**
   * Margin horizontal (for horizontal divider)
   */
  mx?: number | string;

  /**
   * Margin vertical (for vertical divider)
   */
  my?: number | string;
}

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  color = '$gray5',
  thickness = 1,
  length,
  margin,
  mx,
  my,
}) => {
  const isHorizontal = orientation === 'horizontal';

  const stackProps = {
    bg: color as any,
    ...(margin !== undefined && { m: margin as any }),
    ...(mx !== undefined && { mx: mx as any }),
    ...(my !== undefined && { my: my as any }),
  };

  if (isHorizontal) {
    return (
      <XStack
        height={thickness}
        width={typeof length === 'string' ? undefined : length}
        {...stackProps}
      />
    );
  }

  return (
    <YStack
      width={thickness}
      height={typeof length === 'string' ? undefined : length}
      {...stackProps}
    />
  );
};

export default Divider;
