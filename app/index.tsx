import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, YStack, useThemeName } from 'tamagui';

import ExclusiveDeals from '@/components/features/ExclusiveDeals';
import Footer from '@/components/features/Layout/Footer';
import Header from '@/components/features/Layout/Header';
import SearchForm from '@/components/features/SearchForm';

const Index = () => {
  const { t } = useTranslation();

  const name = useThemeName();
  console.log('theme: ', name);

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Header />
      <ScrollView flex={1}>
        <YStack flex={1} pt={30} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text color="#101828" fontSize={28} fontWeight="700" marginBlockEnd={12}>
            Find Best Hotel Deals
          </Text>
          <Text color="#4A5565" fontSize={15} marginBlockEnd={20}>
            Compare hotel prices and save up to 30%
          </Text>
          <SearchForm />
          <ExclusiveDeals />
          <Footer />
        </YStack>
      </ScrollView>
    </>
  );
};

export default Index;
