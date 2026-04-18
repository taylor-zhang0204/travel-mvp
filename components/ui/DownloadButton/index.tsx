import { Download } from '@tamagui/lucide-icons-2';
import * as MediaLibrary from 'expo-media-library';
import { useRef } from 'react';
import Toast from 'react-native-toast-message';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { Text, XStack } from 'tamagui';

type Props = {
  children: React.ReactNode;
};

const DownloadButton = ({ children }: Props) => {
  const ref = useRef<ViewShot>(null);

  const handleDownload = async () => {
    try {
      if (!ref.current) return;
      const uri = await captureRef(ref, { format: 'png', quality: 1 });
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== 'granted') {
        Toast.show({ type: 'error', text1: 'Permission denied' });
        return;
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Toast.show({ type: 'success', text1: 'QR code saved!' });
    } catch {
      Toast.show({ type: 'error', text1: 'Failed to save QR code' });
    }
  };

  return (
    <XStack gap={7} style={{ alignItems: 'flex-end' }}>
      <ViewShot ref={ref} style={{ alignItems: 'center' }}>
        {children}
      </ViewShot>
      <XStack gap={7} style={{ alignItems: 'center' }} onPress={handleDownload}>
        <Text fontSize={13} fontWeight="500" color="#1566d1">
          Download
        </Text>
        <Download size={15} color="#1566d1" />
      </XStack>
    </XStack>
  );
};

export default DownloadButton;
