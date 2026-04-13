import { Button, XStack, YStack, ZStack } from 'tamagui';

export default function Component() {
  return (
    <YStack>
      <XStack maxW={350} p='$2' self='center' gap='$2'>
        <YStack
          flex={1}
          flexBasis='auto'
          borderWidth={2}
          borderColor='$color'
          rounded='$4'
          gap='$2'
          p='$2'
        >
          <YStack bg='$color' rounded='$3' p='$2' />
          <YStack bg='$color' rounded='$3' p='$2' />
          <YStack bg='$color' rounded='$3' p='$2' />
        </YStack>

        <XStack
          flex={1}
          flexBasis='auto'
          borderWidth={2}
          borderColor='$color'
          rounded='$4'
          gap='$2'
          p='$2'
        >
          <YStack bg='$color' rounded='$3' p='$2' />
          <YStack bg='$color' rounded='$3' p='$2' />
          <YStack bg='$color' rounded='$3' p='$2' />
        </XStack>

        <ZStack flex={1} flexBasis='auto' maxW={50} maxH={85} width={100}>
          <YStack
            fullscreen
            rounded='$4'
            p='$2'
            borderColor='$color'
            borderWidth={2}
          />
          <YStack
            borderColor='$color'
            fullscreen
            y={10}
            x={10}
            borderWidth={2}
            rounded='$4'
            p='$2'
          />
          <YStack
            borderColor='$color'
            fullscreen
            y={20}
            x={20}
            borderWidth={2}
            rounded='$4'
            p='$2'
          />
        </ZStack>
      </XStack>
      <Button size='$3' theme='accent' color='red' height={60} width={100}>
        Active
      </Button>
    </YStack>
  );
}
