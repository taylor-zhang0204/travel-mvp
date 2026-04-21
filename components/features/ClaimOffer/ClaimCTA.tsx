import { Button, Text } from 'tamagui';

type Props = {
  disabled?: boolean;
  onPress?: () => void;
};

const ClaimCTA = ({ disabled = false, onPress }: Props) => {
  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      bg={disabled ? '$color6' : '$blue9'}
      px={124}
      py={11}
      justify="center"
      items="center"
      rounded={9}
      hoverStyle={{
        bg: disabled ? '$color6' : '$blue10',
      }}
      pressStyle={{
        borderWidth: 0,
        bg: disabled ? '$color6' : '$blue11',
      }}
    >
      <Text fontSize={15} fontWeight="500" color="$color1">
        Get codes
      </Text>
    </Button>
  );
};

export default ClaimCTA;
