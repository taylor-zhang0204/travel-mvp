import { useEffect } from 'react';
import { Button, Text, XStack } from 'tamagui';

import { useLocale } from '../i18n';

export default function LanguageSwitcher() {
  const [locale, setLocale] = useLocale();

  useEffect(() => {
    console.log('locale: ', locale);
  }, [locale]);

  return (
    <XStack gap="$2">
      <Button
        size="$2"
        variant="outlined"
        bg={locale === 'en' ? '$orange10' : 'transparent'}
        onPress={() => setLocale('en')}
      >
        <Text color={locale === 'en' ? '$white' : '$color'}>EN</Text>
      </Button>
      <Button
        size="$2"
        variant="outlined"
        bg={locale === 'zh' ? '$orange10' : 'transparent'}
        onPress={() => setLocale('zh')}
      >
        <Text color={locale === 'zh' ? '$white' : '$color'}>中文</Text>
      </Button>
    </XStack>
  );
}
