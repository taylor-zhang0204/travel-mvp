import { Download } from '@tamagui/lucide-icons-2';
import { toPng } from 'html-to-image';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { Text, XStack } from 'tamagui';

import { colors } from '@/src/styles';

type Props = {
  children: React.ReactNode;
};

const DownloadButton = ({ children }: Props) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    try {
      if (!containerRef.current) return;
      const dataUrl = await toPng(containerRef.current, { pixelRatio: 2 });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      Toast.show({ type: 'success', text1: t('common.qrDownloaded') });
    } catch {
      Toast.show({ type: 'error', text1: t('common.qrDownloadFailed') });
    }
  };

  return (
    <XStack gap={7} items="flex-end">
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
      <XStack gap={7} items="center" onPress={handleDownload}>
        <Text fontSize={13} fontWeight="500" color={colors.primary}>
          {t('common.download')}
        </Text>
        <Download size={15} color={colors.primary} />
      </XStack>
    </XStack>
  );
};

export default DownloadButton;
