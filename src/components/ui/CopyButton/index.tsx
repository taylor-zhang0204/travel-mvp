import { Copy } from '@tamagui/lucide-icons-2';
import * as Clipboard from 'expo-clipboard';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { Text, XStack } from 'tamagui';

import { colors } from '@/src/styles';

type Props = {
  value: string;
};

const CopyButton = ({ value }: Props) => {
  const { t } = useTranslation();

  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(value);
      Toast.show({ type: 'success', text1: t('common.copied') });
    } catch {
      Toast.show({ type: 'error', text1: t('common.copyFailed') });
    }
  };

  return (
    <XStack gap={7} items="center" onPress={handleCopy}>
      <Text fontSize={13} fontWeight="500" color={colors.primary}>
        {t('common.copy')}
      </Text>
      <Copy size={15} color={colors.primary} />
    </XStack>
  );
};

export default CopyButton;
