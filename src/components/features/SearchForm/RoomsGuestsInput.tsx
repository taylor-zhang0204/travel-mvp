import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sheet, Text, XStack, YStack } from 'tamagui';

import { Minus, MinusDisabled, People, Plus } from '@/src/components/icons/src/public/common';

type Props = {
  rooms: number;
  guests: number;
  onRoomsChange: (rooms: number) => void;
  onGuestsChange: (guests: number) => void;
};

const RoomsGuestsInput = ({ rooms, guests, onRoomsChange, onGuestsChange }: Props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <YStack gap={6}>
      <Text fontSize={13} fontWeight="500" color="#003064">
        {t('searchForm.roomsAndGuests')}
      </Text>
      <XStack
        height={45}
        bg="#F5F7FA"
        px={16}
        gap={12}
        rounded={12}
        items="center"
        onPress={() => setOpen(true)}
      >
        <People size={18} />
        <Text fontSize={15} color="#56708B">
          {t('searchForm.roomGuestSummary', { rooms, guests })}
        </Text>
      </XStack>

      <Sheet modal open={open} onOpenChange={setOpen} snapPoints={[25]} dismissOnSnapToBottom>
        <Sheet.Overlay bg="rgba(0, 0, 0, 0.5)" />
        <Sheet.Frame bg="#fff" p={20} gap={20}>
          <Text fontSize={18} fontWeight="600" color="#003064">
            {t('searchForm.roomsAndGuests')}
          </Text>

          {/* Rooms */}
          <XStack justify="space-between" items="center">
            <Text fontSize={15} color="#003064">
              {t('searchForm.rooms')}
            </Text>
            <XStack items="center" gap={16}>
              {rooms <= 1 ? (
                <MinusDisabled size={30} />
              ) : (
                <Minus size={30} onPress={() => onRoomsChange(Math.max(1, rooms - 1))} />
              )}
              <Text fontSize={17} fontWeight="500" color="#003064" minW={20} text="center">
                {rooms}
              </Text>
              <Plus size={30} onPress={() => onRoomsChange(rooms + 1)} />
            </XStack>
          </XStack>

          {/* Guests */}
          <XStack justify="space-between" items="center">
            <Text fontSize={15} color="#003064">
              {t('searchForm.guests')}
            </Text>
            <XStack items="center" gap={16}>
              {guests <= 1 ? (
                <MinusDisabled size={30} />
              ) : (
                <Minus size={30} onPress={() => onGuestsChange(Math.max(1, guests - 1))} />
              )}
              <Text fontSize={17} fontWeight="500" color="#003064" minW={20} text="center">
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
