import { Check } from '@tamagui/lucide-icons-2';
import dayjs from 'dayjs';
import { router } from 'expo-router';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button, Text, View, XStack, YStack } from 'tamagui';

import { ArrowUpRightFromSquare, Location } from '@/components/icons/src/public/common';
import Rate from '@/components/ui/Rate';
import type { SearchParams } from '@/types/page';
import { openExternalLink } from '@/utils';

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
        style={styles.container}
        resizeMode="cover"
      >
        {/* Gradient overlay */}
        <View style={styles.gradientOverlay} />

        {/* Badge */}
        <XStack style={styles.badge} mt={15} ml={15} px={15} height={19}>
          <Text fontSize={11} fontWeight="500" color="#1566d1">
            Exclusive Partner Offer
            <Text fontSize={11} fontWeight="700" color="#1566d1">
              - {cashback} Cashback
            </Text>
          </Text>
        </XStack>

        <YStack gap={6} mt={44} pl={14} ml={15}>
          <Text fontSize={19} fontWeight="600" style={{ color: '#FFF' }} letterSpacing={-0.2}>
            {destination || 'Langham, Hong Kong'}
          </Text>
          <XStack gap={4} style={{ alignItems: 'center' }}>
            <Rate count={5} />
            <Location size={15} color="#FFF" />
            <Text fontSize={12} color="#FFF">
              Mong Kok, Hong Kong
            </Text>
          </XStack>
        </YStack>
      </ImageBackground>
      <YStack
        mx={15}
        bg="$white"
        px={15}
        py={15}
        style={{
          position: 'relative',
          top: -15,
          borderRadius: 13,
          shadowColor: 'rgba(16, 49, 96, 0.1)',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.6,
          shadowRadius: 10,
        }}
      >
        <Text fontSize={11} color="#505050">
          Direct Booking ({nights} nights, Standard Room, 2 Double Beds)
        </Text>
        <XStack gap={4} mt={8}>
          <Text fontSize={20} fontWeight="700" color="#1566d1">
            $5,506
          </Text>
          <XStack gap={4} style={{ alignItems: 'center' }}>
            <Text fontSize={11} fontWeight="600" color="#1566d1">
              Cashback applied
            </Text>
            <Check size={14} color="#1566d1" />
          </XStack>
        </XStack>
        <Button
          mt={10}
          py={7}
          style={{
            borderRadius: 9,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1566D1',
          }}
          onPress={gotoClaim}
        >
          <Text fontSize={13} fontWeight="500" color="#fff">
            Claim Kody Offer
          </Text>
          <ArrowUpRightFromSquare size={15} color="#fff" />
        </Button>
      </YStack>
      <YStack gap={6} mt={10} px={29} pb={30}>
        <Text fontSize={13} fontWeight="600" color="#101828">
          Other Providers:
        </Text>
        {/* Price comparison rows */}
        {PROVIDERS.map((provider) => (
          <YStack
            key={provider.name}
            borderBottomWidth={1}
            height={38}
            borderColor="#e1e7f3"
            style={{ justifyContent: 'center' }}
          >
            <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Text fontSize={13} fontWeight="500" color="#101828">
                {provider.name}
              </Text>
              <XStack
                gap={8}
                style={{ alignItems: 'center' }}
                onPress={() => openExternalLink(provider.link)}
              >
                <Text fontSize={15} fontWeight="600" color="#101828">
                  {provider.price}
                </Text>
                <ArrowUpRightFromSquare size={14} color="#CDD7E4" />
              </XStack>
            </XStack>
          </YStack>
        ))}
      </YStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 152,
    overflow: 'hidden',
    backgroundColor: 'grey',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 19,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});

export default ExclusiveOffer;
