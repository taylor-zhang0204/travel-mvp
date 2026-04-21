import { useState } from 'react';
import { Sheet, Text, XStack, YStack } from 'tamagui';

import { Minus, MinusDisabled, People, Plus } from '@/components/icons/src/public/common';

type Props = {
  rooms: number;
  guests: number;
  onRoomsChange: (rooms: number) => void;
  onGuestsChange: (guests: number) => void;
};

const RoomsGuestsInput = ({ rooms, guests, onRoomsChange, onGuestsChange }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <YStack gap={6}>
      <Text fontSize={13} fontWeight="500" color="$color11">
        Rooms and guests
      </Text>
      <XStack
        height={45}
        bg="$backgroundPress"
        px={16}
        gap={12}
        rounded={12}
        items="center"
        onPress={() => setOpen(true)}
      >
        <People size={18} />
        <Text fontSize={15} color="$color10">
          {rooms} Room, {guests} Guests
        </Text>
      </XStack>

      <Sheet modal open={open} onOpenChange={setOpen} snapPoints={[25]} dismissOnSnapToBottom>
        <Sheet.Overlay bg="rgba(0, 0, 0, 0.5)" />
        <Sheet.Frame bg="$color1" p={20} gap={20}>
          <Text fontSize={18} fontWeight="600" color="$color11">
            Rooms and guests
          </Text>

          {/* Rooms */}
          <XStack justify="space-between" items="center">
            <Text fontSize={15} color="$color11">
              Rooms
            </Text>
            <XStack items="center" gap={16}>
              {rooms <= 1 ? (
                <MinusDisabled size={30} />
              ) : (
                <Minus size={30} onPress={() => onRoomsChange(Math.max(1, rooms - 1))} />
              )}
              <Text fontSize={17} fontWeight="500" color="$color11" minW={20} text="center">
                {rooms}
              </Text>
              <Plus size={30} onPress={() => onRoomsChange(rooms + 1)} />
            </XStack>
          </XStack>

          {/* Guests */}
          <XStack justify="space-between" items="center">
            <Text fontSize={15} color="$color11">
              Guests
            </Text>
            <XStack items="center" gap={16}>
              {guests <= 1 ? (
                <MinusDisabled size={30} />
              ) : (
                <Minus size={30} onPress={() => onGuestsChange(Math.max(1, guests - 1))} />
              )}
              <Text fontSize={17} fontWeight="500" color="$color11" minW={20} text="center">
                {guests}
              </Text>

              <Plus size={30} onPress={() => onGuestsChange(guests + 1)} />
            </XStack>
          </XStack>
        </Sheet.Frame>
      </Sheet>
    </YStack>
  );
};

export default RoomsGuestsInput;
