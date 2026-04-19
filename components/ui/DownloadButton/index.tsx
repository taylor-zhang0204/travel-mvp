import { Download } from '@tamagui/lucide-icons-2';
import * as MediaLibrary from 'expo-media-library';
import { toPng } from 'html-to-image';
import { useRef } from 'react';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { Text, XStack } from 'tamagui';

type Props = {
  children: React.ReactNode;
};

const DownloadButton = ({ children }: Props) => {
  const viewShotRef = useRef<ViewShot>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWebDownload = async () => {
    try {
      if (!containerRef.current) return;
      const dataUrl = await toPng(containerRef.current, { pixelRatio: 2 });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      Toast.show({ type: 'success', text1: 'QR code downloaded!' });
    } catch (error) {
      console.log('Web download error:', error);
      Toast.show({ type: 'error', text1: 'Failed to download QR code' });
    }
  };

  const handleDownload = async () => {
    console.log('handleDownload');
    try {
      if (Platform.OS === 'web') {
        await handleWebDownload();
        return;
      }

      if (!viewShotRef.current) return;
      const uri = await captureRef(viewShotRef, { format: 'png', quality: 1 });

      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== 'granted') {
        Toast.show({ type: 'error', text1: 'Permission denied' });
        return;
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Toast.show({ type: 'success', text1: 'QR code saved!' });
    } catch (error) {
      console.log('Download error:', error);
      Toast.show({ type: 'error', text1: 'Failed to save QR code' });
    }
  };

  return (
    <XStack gap={7} style={{ alignItems: 'flex-end' }}>
      {Platform.OS === 'web' ? (
        <div
          ref={containerRef}
          style={{
            width: 100,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      ) : (
        <ViewShot
          ref={viewShotRef}
          style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}
        >
          {children}
        </ViewShot>
      )}
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
