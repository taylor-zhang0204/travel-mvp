import { Circle, Text } from 'tamagui';

import { colors } from '@/src/styles/theme';

type Props = {
  number: string;
  active?: boolean;
};

const StepBadge = ({ number, active = false }: Props) => {
  return (
    <Circle size={37} bg={active ? colors.stepActive : colors.stepInactive}>
      <Text fontSize={15} fontWeight="600" color={colors.stepText}>
        {number}
      </Text>
    </Circle>
  );
};

export default StepBadge;
