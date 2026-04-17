import { Input, Text, YStack } from 'tamagui';

const ClaimEmailForm = () => {
  return (
    <YStack gap={4}>
      <Text fontSize={13} fontWeight="500" color="#364153">
        Enter details to get Kody code via email
      </Text>
      <YStack gap={4}>
        <Text fontSize={13} fontWeight="500" color="#364153">
          Name*
        </Text>
        <Input
          placeholder="Jane Doe"
          bg="#f5f7fa"
          borderWidth={0.9}
          borderColor="#eceff2"
          px={11}
          py={7}
          style={{ borderRadius: 9, height: 35 }}
          fontSize={13}
        />
      </YStack>
      <YStack gap={4}>
        <Text fontSize={13} fontWeight="500" color="#364153">
          Email*
        </Text>
        <Input
          placeholder="user@email.com"
          bg="#f5f7fa"
          borderWidth={0.9}
          borderColor="#eceff2"
          px={11}
          py={7}
          style={{ borderRadius: 9, height: 35 }}
          fontSize={13}
        />
      </YStack>
    </YStack>
  );
};

export default ClaimEmailForm;
