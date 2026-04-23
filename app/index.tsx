import { ScrollView, Text, YStack } from 'tamagui';

import ExclusiveDeals from '@/src/components/features/ExclusiveDeals';
import Footer from '@/src/components/features/Layout/Footer';
import Header from '@/src/components/features/Layout/Header';
import SearchForm from '@/src/components/features/SearchForm';

const Index = () => {
  return (
    <YStack flex={1} bg="#F7F9FD">
      <Header />
      <ScrollView flex={1}>
        <YStack pt={30} items="center">
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
    </YStack>
  );
};

export default Index;
