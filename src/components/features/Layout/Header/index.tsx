import { ChevronLeft } from '@tamagui/lucide-icons-2';
import { useNavigation, usePathname, useRouter } from 'expo-router';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { XStack, YStack } from 'tamagui';

import { Globe, Logo } from '@/src/components/icons/src/public/common';
import { safeGoBack } from '@/src/utils/navigation';

interface HeaderProps {
  showBack?: boolean;
  title?: ReactNode;
  right?: ReactNode;
}

const Header = ({ showBack = true, title, right }: HeaderProps) => {
  const router = useRouter();
  const navigation = useNavigation();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const goBack = () => {
    safeGoBack(router, navigation);
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

  const isHome = pathname === '/' || pathname === '';
  const showBackBtn = showBack && !isHome;

  return (
    <XStack
      height={60}
      px={4}
      items="center"
      bg="#FFFFFF"
      borderBottomWidth={1}
      borderBottomColor="#E5E7EB"
    >
      <XStack width={48} height={48} items="center" justify="center">
        {showBackBtn ? (
          <YStack
            width={44}
            height={44}
            items="center"
            justify="center"
            pressStyle={{ opacity: 0.5 }}
          >
            <ChevronLeft size={24} onPress={goBack} />
          </YStack>
        ) : null}
      </XStack>

      <YStack flex={1} items="center">
        {title || <Logo size={60} />}
      </YStack>

      <XStack width={48} height={48} items="center" justify="center">
        {right ?? (
          <YStack
            width={44}
            height={44}
            items="center"
            justify="center"
            pressStyle={{ opacity: 0.5 }}
          >
            <Globe size={30} onPress={changeLanguage} />
          </YStack>
        )}
      </XStack>
    </XStack>
  );
};

export default Header;
