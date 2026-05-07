import { Download } from '@tamagui/lucide-icons-2';
import * as MediaLibrary from 'expo-media-library';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { Text, XStack } from 'tamagui';

type Props = {
  children: React.ReactNode;
};

const DownloadButton = ({ children }: Props) => {
  const { t } = useTranslation();
  const viewShotRef = useRef<ViewShot>(null);

  const handleDownload = async () => {
    try {
      if (!viewShotRef.current) return;
      const uri = await captureRef(viewShotRef, { format: 'png', quality: 1 });

      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== 'granted') {
        Toast.show({ type: 'error', text1: t('common.permissionDenied') });
        return;
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Toast.show({ type: 'success', text1: t('common.qrSaved') });
    } catch {
      Toast.show({ type: 'error', text1: t('common.qrSaveFailed') });
    }
  };

  return (
    <XStack gap={7} items="flex-end">
      <ViewShot
        ref={viewShotRef}
        style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}
      >
        {children}
      </ViewShot>
      <XStack gap={7} items="center" onPress={handleDownload}>
        <Text fontSize={13} fontWeight="500" color="#1566d1">
          {t('common.download')}
        </Text>
        <Download size={15} color="#1566d1" />
      </XStack>
    </XStack>
  );
};

export default DownloadButton;
