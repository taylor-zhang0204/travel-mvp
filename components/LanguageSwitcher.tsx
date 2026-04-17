import { useTranslation } from 'react-i18next';
import { Button, Text, XStack } from 'tamagui';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <XStack gap="$2">
      <Button
        size="$2"
        variant="outlined"
        bg={i18n.language === 'en' ? '$orange10' : 'transparent'}
        onPress={() => i18n.changeLanguage('en')}
      >
        <Text color={i18n.language === 'en' ? '$white' : '$color'}>EN</Text>
      </Button>
      <Button
        size="$2"
        variant="outlined"
        bg={i18n.language === 'zh' ? '$orange10' : 'transparent'}
        onPress={() => i18n.changeLanguage('zh')}
      >
        <Text color={i18n.language === 'zh' ? '$white' : '$color'}>中文</Text>
      </Button>
    </XStack>
  );
};

export default LanguageSwitcher;
