import { ChevronLeft } from '@tamagui/lucide-icons-2';
import { useRouter } from 'expo-router';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { XStack, YStack } from 'tamagui';

import { Globe, Logo } from '@/src/components/icons/src/public/common';

interface HeaderProps {
  showBack?: boolean;
  title?: ReactNode;
  right?: ReactNode;
}

const Header = ({ showBack = true, title, right }: HeaderProps) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const goBack = () => {
    try {
      router.back();
    } catch {
      router.replace('/');
    }
  };

  const changeLanguage = async () => {
    const nextLang = i18n.language === 'en' ? 'zh' : 'en';
    await i18n.changeLanguage(nextLang);
    Toast.show({
      type: 'success',
      text1: i18n.t('header.languageSwitched', {
        lng: nextLang,
        language: i18n.t(`lang.${nextLang}`, { lng: nextLang }),
      }),
    });
  };

  return (
    <XStack
      height={60}
      paddingInline={8}
      items="center"
      bg="#FFFFFF"
      borderBottomWidth={1}
      borderBottomColor="#E5E7EB"
    >
      <YStack position="absolute" l={8}>
        {router.canGoBack() && showBack && <ChevronLeft onPress={goBack} />}
      </YStack>
      <YStack flex={1} items="center">
        {title || <Logo size={60} />}
      </YStack>
      <YStack position="absolute" r={8}>
        {right || <Globe size={40} onPress={changeLanguage} />}
      </YStack>
    </XStack>
  );
};

export default Header;
