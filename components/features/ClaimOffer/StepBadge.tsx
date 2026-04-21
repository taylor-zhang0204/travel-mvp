import { XStack, Text } from 'tamagui';

type Props = {
  number: string;
  active?: boolean;
};

const StepBadge = ({ number, active = false }: Props) => {
  return (
    <XStack
      width={37}
      height={37}
      bg={active ? '$accentBackground' : '$color4'}
      rounded={999}
      justify="center"
      items="center"
    >
      <Text fontSize={15} fontWeight="600" color="$color10">
        {number}
      </Text>
    </XStack>
  );
};

export default StepBadge;
