import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, YStack } from 'tamagui';

import ExclusiveDeals from '@/components/ui/ExclusiveDeals';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import SearchForm from '@/components/ui/SearchForm';

const Index = () => {
  const { t } = useTranslation();

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
