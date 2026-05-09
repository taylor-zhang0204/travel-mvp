import { Check } from '@tamagui/lucide-icons-2';
import dayjs from 'dayjs';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ImageBackground, StyleSheet } from 'react-native';
import { Anchor, Button, Text, View, XStack, YStack } from 'tamagui';

import type { SearchHotelResponse } from '@/src/api/examples';
import { ArrowUpRightFromSquare, Location } from '@/src/components/icons/src/public/common';
import Rate from '@/src/components/ui/Rate';
import { colors } from '@/src/styles/theme';
import type { SearchParams } from '@/src/types/page';

type Props = {
  cashback?: string;
  info?: SearchHotelResponse['hotel'];
} & Partial<SearchParams>;

const ExclusiveOffer = ({ cashback = '5%', info }: Props) => {
  const { t } = useTranslation();
  const { check_in_date: checkIn, check_out_date: checkOut } = info || {};
  const nights = dayjs(checkOut).diff(dayjs(checkIn), 'day');
  const gotoClaim = () => {
    router.push({
      pathname: '/claim',
    });
  };

  const uniqueProviders = [...new Map(info?.booking_options.map((p) => [p.platform, p])).values()];

  return (
    <YStack>
      <ImageBackground
        source={{
          uri: info?.photos?.[0]?.photo_url || '',
        }}
        style={{ width: '100%', height: 152, overflow: 'hidden', backgroundColor: 'grey' }}
        resizeMode="cover"
      >
        {/* Gradient overlay */}
        <View bg="rgba(0, 0, 0, 0.5)" style={StyleSheet.absoluteFillObject} />

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
          <Text fontSize={11} fontWeight="500" color={colors.primary}>
            {t('offer.badge')}
            <Text fontSize={11} fontWeight="700" color={colors.primary}>
              {t('offer.badgeCashback', { cashback })}
            </Text>
          </Text>
        </XStack>

        <YStack gap={6} mt={44} pl={14} ml={15}>
          <Text fontSize={19} fontWeight="600" color={colors.textWhite} letterSpacing={-0.2}>
            {info?.hotel_name || t('searchForm.destinationPlaceholder')}
          </Text>
          <XStack gap={4} items="center">
            <Rate count={info?.rating || 0} />
            <Location size={15} color={colors.textWhite} />
            <Text fontSize={12} color={colors.textWhite}>
              {info?.address || t('offer.defaultLocation')}
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
        <Text fontSize={11} color={colors.textSubtle}>
          {t('offer.directBooking', { nights })}
        </Text>
        <XStack gap={4} mt={8}>
          <Text fontSize={20} fontWeight="700" color={colors.primary}>
            {info?.price_trend}
          </Text>
          <XStack gap={4} items="center">
            <Text fontSize={11} fontWeight="600" color={colors.primary}>
              {t('offer.cashbackApplied')}
            </Text>
            <Check size={14} color={colors.primary} />
          </XStack>
        </XStack>
        <Button
          mt={10}
          py={7}
          rounded={9}
          justify="center"
          items="center"
          bg={colors.primary}
          onPress={gotoClaim}
          pressStyle={{
            borderWidth: 0,
          }}
        >
          <Text fontSize={13} fontWeight="500" color={colors.textWhite}>
            {t('offer.claimKodyOffer')}
          </Text>
          <ArrowUpRightFromSquare size={15} color={colors.textWhite} />
        </Button>
      </YStack>
      <YStack gap={6} mt={10} px={29} pb={30}>
        <Text fontSize={13} fontWeight="600" color={colors.textPrimary}>
          {t('offer.otherProviders')}
        </Text>
        {/* Price comparison rows */}
        {uniqueProviders.map((provider) => (
          <YStack
            key={`${provider.platform}-${provider.room_type}`}
            borderBottomWidth={1}
            height={38}
            borderColor={colors.providerBorder}
            justify="center"
          >
            <XStack justify="space-between" items="center">
              <Text fontSize={13} fontWeight="500" color={colors.textPrimary}>
                {`${provider.platform}`}
              </Text>
              <Anchor
                href={provider.url}
                target="_blank"
                textDecorationLine="none"
                hoverStyle={{ textDecorationLine: 'none' }}
              >
                <XStack items="center" gap={8}>
                  <Text fontSize={15} fontWeight="600" color={colors.textPrimary}>
                    {provider.price}
                  </Text>
                  <ArrowUpRightFromSquare size={14} color={colors.providerIcon} />
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
