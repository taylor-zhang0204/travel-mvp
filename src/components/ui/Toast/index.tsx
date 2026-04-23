import { Text, YStack } from 'tamagui';

const SuccessToast = ({ text1 }: { text1: string }) => (
  <YStack bg="#101828" rounded={8} p={16} minH={50}>
    <Text color="$white" fontSize={14} fontWeight="500">
      {text1}
    </Text>
  </YStack>
);

const ErrorToast = ({ text1 }: { text1: string }) => (
  <YStack bg="#dc2626" rounded={8} p={16} minH={50}>
    <Text color="$white" fontSize={14} fontWeight="500">
      {text1}
    </Text>
  </YStack>
);

export { ErrorToast, SuccessToast };
