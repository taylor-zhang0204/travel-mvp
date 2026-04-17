import { ChevronLeft } from '@tamagui/lucide-icons-2';
import { useRouter } from 'expo-router';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { XStack, YStack } from 'tamagui';

import { Globe, Logo } from '@/components/icons/src/public/common';

interface HeaderProps {
  showBack?: boolean;
  title?: ReactNode;
  right?: ReactNode;
}

const Header = ({ showBack = true, title, right }: HeaderProps) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return (
    <XStack
      height={60}
      paddingInline={8}
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
      }}
    >
      <YStack position="absolute" style={{ left: 8 }}>
        {router.canGoBack() && showBack && <ChevronLeft onPress={() => router.back()} />}
      </YStack>
      <YStack flex={1} style={{ alignItems: 'center' }}>
        {title || <Logo size={60} />}
      </YStack>
      <YStack position="absolute" style={{ right: 8 }}>
        {right || (
          <Globe
            size={40}
            onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
          />
        )}
      </YStack>
    </XStack>
  );
};

export default Header;
