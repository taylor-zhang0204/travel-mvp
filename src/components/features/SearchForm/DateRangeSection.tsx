import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Button, Sheet, Text, XStack, YStack } from 'tamagui';

import { Calendar } from '@/src/components/icons/src/public/common';
import DateRangePicker from '@/src/components/ui/DateRangePicker';

type Props = {
  checkIn: string;
  checkOut: string;
  onDateRangeChange: (range: { startDate: string; endDate: string }) => void;
};

const DateRangeSection = ({ checkIn, checkOut, onDateRangeChange }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [range, setRange] = useState<{ startDate: string; endDate: string }>({
    startDate: checkIn,
    endDate: checkOut,
  });

  const [night, setNight] = useState<number>();

  useEffect(() => {
    const { startDate, endDate } = range;
    if (startDate && endDate) {
      setNight(dayjs(endDate).diff(dayjs(startDate), 'day'));
    } else {
      setNight(0);
    }
  }, [range]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    setDialogOpen(false);
    onDateRangeChange(range);
  };

  const isDisabled = !range.startDate || !range.endDate;

  return (
    <>
      <XStack gap={8}>
        {/* Check-in */}
        <YStack flex={1} gap={6}>
          <Text fontSize={13} fontWeight="500" color="#003064" letterSpacing={-0.2}>
            Check-in
          </Text>
          <XStack
            height={45}
            px={14}
            gap={8}
            onPress={handleOpenDialog}
            bg="#F5F7FA"
            rounded={12}
            items="center"
          >
            <Calendar size={16} />
            <Text fontSize={14} color="#56708B">
              {checkIn}
            </Text>
          </XStack>
        </YStack>

        {/* Check-out */}
        <YStack flex={1} gap={6}>
          <Text fontSize={13} fontWeight="500" color="#003064" letterSpacing={-0.2}>
            Check-out
          </Text>
          <XStack
            height={45}
            px={14}
            gap={8}
            onPress={handleOpenDialog}
            bg="#F5F7FA"
            rounded={12}
            items="center"
          >
            <Calendar size={16} />
            <Text fontSize={14} color="#56708B">
              {checkOut}
            </Text>
          </XStack>
        </YStack>
      </XStack>

      <Sheet
        modal
        disableDrag
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        snapPointsMode="constant"
        snapPoints={[590]}
      >
        <Sheet.Overlay bg="rgba(0,0,0,0.5)" />
        <Sheet.Frame bg="$white">
          <YStack>
            {/* Title */}
            <YStack gap={12} pt={24} pb={12} px={22} bg="#F5F7FA">
              <Text fontSize={20} fontWeight="500" color="#003064">
                Select dates
              </Text>
              {/* Date Info Row */}
              <XStack gap={30} px={8}>
                {/* Check-in */}
                <YStack gap={1}>
                  <Text fontSize={13} fontWeight="500" color="#56708B">
                    Check-in
                  </Text>
                  <Text fontSize={14} fontWeight="600" color="#003064">
                    {range.startDate}
                  </Text>
                </YStack>

                {/* Check-out */}
                <YStack gap={1}>
                  <Text fontSize={13} fontWeight="500" color="#56708B">
                    Check-out
                  </Text>
                  <Text fontSize={14} fontWeight="600" color="#003064">
                    {range.endDate}
                  </Text>
                </YStack>

                {/* Total stay */}
                <YStack gap={1}>
                  <Text fontSize={13} fontWeight="500" color="#56708B">
                    Total stay
                  </Text>
                  <Text fontSize={14} fontWeight="600" color="#003064">
                    {night ? `${night} Nights` : ''}
                  </Text>
                </YStack>
              </XStack>
            </YStack>

            {/* Date Picker */}
            <XStack height={400} px={22} py={16}>
              <DateRangePicker
                initialRange={{ startDate: range.startDate, endDate: range.endDate }}
                onRangeChange={setRange}
              />
            </XStack>

            <XStack gap={12} px={30} py={16} justify="flex-end" bg="#F5F7FA">
              <Button
                bg={isDisabled ? '#CBD5E1' : '#1566D1'}
                rounded={10}
                height={45}
                flex={1}
                disabled={isDisabled}
                onPress={handleConfirm}
                pressStyle={{ borderWidth: 0 }}
              >
                <Text color="#fff" fontSize={15} fontWeight="500">
                  Apply
                </Text>
              </Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  );
};

export default DateRangeSection;
