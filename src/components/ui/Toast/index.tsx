import { Text, YStack } from 'tamagui';

import { colors } from '@/src/styles';

const SuccessToast = ({ text1 }: { text1: string }) => (
  <YStack bg={colors.toastSuccess} rounded={8} p={16} minH={50}>
    <Text color="$white" fontSize={14} fontWeight="500">
      {text1}
    </Text>
  </YStack>
);

const ErrorToast = ({ text1 }: { text1: string }) => (
  <YStack bg={colors.toastError} rounded={8} p={16} minH={50}>
    <Text color="$white" fontSize={14} fontWeight="500">
      {text1}
    </Text>
  </YStack>
);

export { ErrorToast, SuccessToast };
