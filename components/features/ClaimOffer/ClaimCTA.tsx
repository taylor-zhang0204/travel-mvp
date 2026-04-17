import { Button, Text } from 'tamagui';

const ClaimCTA = () => {
  return (
    <Button
      bg="#1566d1"
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
