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
      bg={disabled ? '#9ca3af' : '#1566d1'}
      px={124}
      py={11}
      style={{ borderRadius: 9, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text fontSize={15} fontWeight="500" color="#fff">
        Get codes
      </Text>
    </Button>
  );
};

export default ClaimCTA;
