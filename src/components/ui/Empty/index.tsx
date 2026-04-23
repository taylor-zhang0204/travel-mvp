import type { ReactNode } from 'react';
import { Text, YStack } from 'tamagui';

interface EmptyProps {
  /** Title text shown below the icon */
  title?: string;
  /** Secondary description text */
  description?: string;
  /** Optional custom icon / illustration node */
  icon?: ReactNode;
  /** Optional action node (e.g. a Button) shown at the bottom */
  action?: ReactNode;
  /** Vertical padding of the container */
  py?: number;
}

export const Empty = ({ title = 'No data', description, icon, action, py = 30 }: EmptyProps) => (
  <YStack items="center" justify="center" gap={12} py={py} px={24}>
    {icon}
    <YStack items="center" gap={4}>
      <Text fontSize={16} fontWeight="600" color="#101828" text="center">
        {title}
      </Text>
      {description ? (
        <Text fontSize={14} color="#77889b" text="center">
          {description}
        </Text>
      ) : null}
    </YStack>
    {action}
  </YStack>
);

export default Empty;
