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
      <Text fontSize={13} fontWeight="500" style={{ color: '#003064' }} letterSpacing={-0.2}>
        Rooms and guests
      </Text>
      <XStack
        height={45}
        bg="#F5F7FA"
        px={16}
        gap={12}
        style={{ borderRadius: 12, alignItems: 'center' }}
        onPress={() => setOpen(true)}
      >
        <People size={18} />
        <Text fontSize={15} style={{ color: '#56708B' }}>
          {rooms} Room, {guests} Guests
        </Text>
      </XStack>

      <Sheet modal open={open} onOpenChange={setOpen} snapPoints={[25]} dismissOnSnapToBottom>
        <Sheet.Overlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        <Sheet.Frame
          style={{
            backgroundColor: '#fff',
            padding: 20,
            gap: 20,
          }}
        >
          <Text fontSize={18} fontWeight="600" style={{ color: '#003064' }}>
            Rooms and guests
          </Text>

          {/* Rooms */}
          <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Text fontSize={15} style={{ color: '#003064' }}>
              Rooms
            </Text>
            <XStack style={{ alignItems: 'center', gap: 16 }}>
              {rooms <= 1 ? (
                <MinusDisabled size={30} />
              ) : (
                <Minus size={30} onPress={() => onRoomsChange(Math.max(1, rooms - 1))} />
              )}
              <Text
                fontSize={17}
                fontWeight="500"
                style={{ color: '#003064', minWidth: 20, textAlign: 'center' }}
              >
                {rooms}
              </Text>
              <Plus size={30} onPress={() => onRoomsChange(rooms + 1)} />
            </XStack>
          </XStack>

          {/* Guests */}
          <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Text fontSize={15} style={{ color: '#003064' }}>
              Guests
            </Text>
            <XStack style={{ alignItems: 'center', gap: 16 }}>
              {guests <= 1 ? (
                <MinusDisabled size={30} />
              ) : (
                <Minus size={30} onPress={() => onGuestsChange(Math.max(1, guests - 1))} />
              )}
              <Text
                fontSize={17}
                fontWeight="500"
                style={{ color: '#003064', minWidth: 20, textAlign: 'center' }}
              >
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
