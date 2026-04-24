import { Circle, Text } from 'tamagui';

type Props = {
  number: string;
  active?: boolean;
};

const StepBadge = ({ number, active = false }: Props) => {
  return (
    <Circle size={37} bg={active ? '#d1dff0' : '#e5e7eb'}>
      <Text fontSize={15} fontWeight="600" color="#4a4f55">
        {number}
      </Text>
    </Circle>
  );
};

export default StepBadge;
