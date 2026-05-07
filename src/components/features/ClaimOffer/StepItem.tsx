import { Text, XStack, YStack } from 'tamagui';

import { colors } from '@/src/styles/theme';

import StepBadge from './StepBadge';

type Props = {
  number: string;
  title: string;
  description?: string;
  active?: boolean;
  children?: React.ReactNode;
};

const StepItem = ({ number, title, description, active = false, children }: Props) => {
  return (
    <XStack gap={15} items="flex-start">
      <StepBadge number={number} active={active} />
      <YStack flex={1} gap={15}>
        <Text fontSize={17} fontWeight="600" color={colors.textPrimary} letterSpacing={-0.4}>
          {title}
        </Text>
        {description && (
          <Text fontSize={13} color={colors.textSecondary} letterSpacing={-0.1}>
            {description}
          </Text>
        )}
        {children}
      </YStack>
    </XStack>
  );
};

export default StepItem;
