import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input, Text, TextArea, Theme, XStack, YStack, ZStack } from 'tamagui';

import { useI18n } from '@/i18n';

export default function Component() {
  const { t } = useI18n();

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <XStack
        height={70}
        flex={1}
        borderColor="$color"
        borderBottomWidth={1}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{t('component.title')}</Text>
      </XStack>
      <YStack>
        <XStack maxW={350} p="$2" self="center" gap="$2">
          <YStack
            flex={1}
            flexBasis="auto"
            borderWidth={2}
            borderColor="$color"
            rounded="$4"
            gap="$2"
            p="$2"
          >
            <YStack bg="$color" rounded="$3" p="$2" />
            <YStack bg="$color" rounded="$3" p="$2" />
            <YStack bg="$color" rounded="$3" p="$2" />
          </YStack>

          <XStack
            flex={1}
            flexBasis="auto"
            borderWidth={2}
            borderColor="$color"
            rounded="$4"
            gap="$2"
            p="$2"
          >
            <YStack bg="$color" rounded="$3" p="$2" />
            <YStack bg="$color" rounded="$3" p="$2" />
            <YStack bg="$color" rounded="$3" p="$2" />
          </XStack>

          <ZStack flex={1} flexBasis="auto" maxW={50} maxH={85} width={100}>
            <YStack fullscreen rounded="$4" p="$2" borderColor="$color" borderWidth={2} />
            <YStack
              borderColor="$color"
              fullscreen
              y={10}
              x={10}
              borderWidth={2}
              rounded="$4"
              p="$2"
            />
            <YStack
              borderColor="$color"
              fullscreen
              y={20}
              x={20}
              borderWidth={2}
              rounded="$4"
              p="$2"
            />
          </ZStack>
        </XStack>
        <Theme name="dark">
          <Button size="$3" variant="outlined" height={60} width={100}>
            {t('component.activeButton')}
          </Button>
          <TextArea height={100} placeholder={t('component.enterDetails')} />
          <XStack>
            <Input
              className=""
              borderWidth={2}
              borderColor="$color"
              placeholder={t('component.placeholder')}
            />
            <Text color="$color">{t('component.testText')}</Text>
          </XStack>
        </Theme>
      </YStack>
    </SafeAreaView>
  );
}
