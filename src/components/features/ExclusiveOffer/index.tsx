import { Check } from '@tamagui/lucide-icons-2';
import dayjs from 'dayjs';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ImageBackground, StyleSheet } from 'react-native';
import { Anchor, Button, Text, View, XStack, YStack } from 'tamagui';

import { ArrowUpRightFromSquare, Location } from '@/src/components/icons/src/public/common';
import Rate from '@/src/components/ui/Rate';
import type { SearchParams } from '@/src/types/page';

type Props = {
  cashback?: string;
} & Partial<SearchParams>;

const PROVIDERS = [
  { name: 'Booking.com', price: 'HK$5,812', link: 'https://www.booking.com/' },
  { name: 'Trip.com', price: 'HK$5,876', link: 'https://www.trip.com/' },
  { name: 'Agoda', price: 'HK$5,834', link: 'https://www.agoda.com/' },
  { name: 'Expedia', price: 'HK$5,865', link: 'https://www.expedia.com/' },
  { name: 'Hotels', price: 'HK$5,845', link: 'https://www.hotels.com/' },
];

const ExclusiveOffer = ({
  cashback = '5%',
  destination = '',
  checkIn = '',
  checkOut = '',
}: Props) => {
  const { t } = useTranslation();
  const nights = dayjs(checkOut).diff(dayjs(checkIn), 'day');
  const gotoClaim = () => {
    router.push({
      pathname: '/claim',
    });
  };

  return (
    <YStack>
      <ImageBackground
        source={{
          uri: 'https://pix10.agoda.net/hotelImages/551/551856/551856_16111110450048635209.jpg',
        }}
        style={{ width: '100%', height: 152, overflow: 'hidden', backgroundColor: 'grey' }}
        resizeMode="cover"
      >
        {/* Gradient overlay */}
        <View style={StyleSheet.absoluteFillObject} />

        {/* Badge */}
        <XStack
          bg="rgba(255, 255, 255, 0.6)"
          rounded={19}
          items="center"
          self="flex-start"
          mt={15}
          ml={15}
          px={15}
          height={19}
        >
          <Text fontSize={11} fontWeight="500" color="#1566d1">
            {t('offer.badge')}
            <Text fontSize={11} fontWeight="700" color="#1566d1">
              {t('offer.badgeCashback', { cashback })}
            </Text>
          </Text>
        </XStack>

        <YStack gap={6} mt={44} pl={14} ml={15}>
          <Text fontSize={19} fontWeight="600" color="#FFF" letterSpacing={-0.2}>
            {destination || t('searchForm.destinationPlaceholder')}
          </Text>
          <XStack gap={4} items="center">
            <Rate count={4.5} />
            <Location size={15} color="#FFF" />
            <Text fontSize={12} color="#FFF">
              {t('offer.defaultLocation')}
            </Text>
          </XStack>
        </YStack>
      </ImageBackground>
      <YStack
        mx={15}
        bg="$white"
        px={15}
        py={15}
        position="relative"
        t={-15}
        rounded={13}
        shadowColor="rgba(16, 49, 96, 0.1)"
        shadowOffset={{ width: 0, height: 0 }}
        shadowOpacity={0.6}
        shadowRadius={10}
      >
        <Text fontSize={11} color="#505050">
          {t('offer.directBooking', { nights })}
        </Text>
        <XStack gap={4} mt={8}>
          <Text fontSize={20} fontWeight="700" color="#1566d1">
            $5,506
          </Text>
          <XStack gap={4} items="center">
            <Text fontSize={11} fontWeight="600" color="#1566d1">
              {t('offer.cashbackApplied')}
            </Text>
            <Check size={14} color="#1566d1" />
          </XStack>
        </XStack>
        <Button
          mt={10}
          py={7}
          rounded={9}
          justify="center"
          items="center"
          bg="#1566D1"
          onPress={gotoClaim}
          pressStyle={{
            borderWidth: 0,
          }}
        >
          <Text fontSize={13} fontWeight="500" color="#fff">
            {t('offer.claimKodyOffer')}
          </Text>
          <ArrowUpRightFromSquare size={15} color="#fff" />
        </Button>
      </YStack>
      <YStack gap={6} mt={10} px={29} pb={30}>
        <Text fontSize={13} fontWeight="600" color="#101828">
          {t('offer.otherProviders')}
        </Text>
        {/* Price comparison rows */}
        {PROVIDERS.map((provider) => (
          <YStack
            key={provider.name}
            borderBottomWidth={1}
            height={38}
            borderColor="#e1e7f3"
            justify="center"
          >
            <XStack justify="space-between" items="center">
              <Text fontSize={13} fontWeight="500" color="#101828">
                {provider.name}
              </Text>
              <Anchor
                href={provider.link}
                target="_blank"
                textDecorationLine="none"
                hoverStyle={{ textDecorationLine: 'none' }}
              >
                <XStack items="center" gap={8}>
                  <Text fontSize={15} fontWeight="600" color="#101828">
                    {provider.price}
                  </Text>
                  <ArrowUpRightFromSquare size={14} color="#CDD7E4" />
                </XStack>
              </Anchor>
            </XStack>
          </YStack>
        ))}
      </YStack>
    </YStack>
  );
};

export default ExclusiveOffer;
