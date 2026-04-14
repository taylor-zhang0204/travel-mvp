import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

import DateRangePicker from '@/components/DateRangePicker';
import { useI18n } from '@/i18n';

export default function Index() {
  const { t } = useI18n();

  return (
    <>
      <Stack.Screen options={{ title: t('index.tabsTitle') }} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/component">{t('index.openComponents')}</Link>
        <Link href="/component1">{t('index.openComponentsAlt')}</Link>

        <DateRangePicker initialRange={{ startDate: '2026-03-27', endDate: '2026-04-05' }} />
      </View>
    </>
  );
}
