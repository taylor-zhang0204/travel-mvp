import { Copy } from '@tamagui/lucide-icons-2';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { Text, XStack } from 'tamagui';

type Props = {
  value: string;
};

const CopyButton = ({ value }: Props) => {
  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(value);
      Toast.show({ type: 'success', text1: 'Copied!' });
    } catch {
      Toast.show({ type: 'error', text1: 'Failed to copy' });
    }
  };

  return (
    <XStack gap={7} items="center" onPress={handleCopy}>
      <Text fontSize={13} fontWeight="500" color="#1566d1">
        Copy
      </Text>
      <Copy size={15} color="#1566d1" />
    </XStack>
  );
};

export default CopyButton;
