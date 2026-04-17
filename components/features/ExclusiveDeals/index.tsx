import { ImageBackground, StyleSheet, View } from 'react-native';
import { Text, XStack, YStack } from 'tamagui';

import { SCREEN_WIDTH } from '@/utils/screen';

const CARD_WIDTH = SCREEN_WIDTH - 50;
const CARD_HEIGHT = 100;
const CARD_BORDER_RADIUS = 13;

type Deal = {
  id: string;
  name: string;
  deal: string;
  imageUrl: string;
};

type Props = {
  deals?: Deal[];
};

const ExclusiveDeals = ({ deals = [] }: Props) => {
  const defaultDeals: Deal[] =
    deals.length > 0
      ? deals
      : [
          {
            id: '1',
            name: 'Langham',
            deal: '10% cashback deal',
            imageUrl:
              'https://pix10.agoda.net/hotelImages/551/551856/551856_16111110450048635209.jpg',
          },
          {
            id: '2',
            name: 'Langham',
            deal: '15% cashback deal',
            imageUrl:
              'https://img1.baidu.com/it/u=3415293545,3582943321&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
          },
          {
            id: '3',
            name: 'Langham',
            deal: '20% cashback deal',
            imageUrl:
              'https://img2.baidu.com/it/u=536344076,370510174&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=648',
          },
        ];

  return (
    <YStack gap={22} pt={22} px={14} pb={36}>
      {/* Title */}
      <XStack style={styles.titleContainer}>
        <Text fontSize={22} fontWeight="700" color="#101828" style={styles.title}>
          Exclusive Deals
        </Text>
      </XStack>

      {/* Deals Container */}
      <YStack gap={15} width={CARD_WIDTH} height={CARD_HEIGHT * 3 + 15 * 2}>
        {defaultDeals.map((item) => (
          <View key={item.id} style={styles.cardWrapper}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.cardBackground}
              resizeMode="cover"
              imageStyle={{ borderRadius: CARD_BORDER_RADIUS }}
            >
              {/* Semi-transparent Overlay */}
              <View style={[styles.gradientOverlay, { borderRadius: CARD_BORDER_RADIUS }]}>
                <XStack pt={50} px={22} pb={22}>
                  <YStack flex={1}>
                    <Text fontSize={18} fontWeight="600" color="$white" style={styles.hotelName}>
                      {item.name}
                    </Text>
                    <Text fontSize={15} fontWeight="400" color="$white" style={styles.dealText}>
                      {item.deal}
                    </Text>
                  </YStack>
                </XStack>
              </View>
            </ImageBackground>
          </View>
        ))}
      </YStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  cardWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: CARD_BORDER_RADIUS,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.9 },
    shadowOpacity: 1,
    shadowRadius: 2.8,
    elevation: 2,
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradientOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  hotelName: {
    textAlign: 'center',
    marginBottom: 7,
  },
  dealText: {
    textAlign: 'center',
  },
});

export default ExclusiveDeals;
