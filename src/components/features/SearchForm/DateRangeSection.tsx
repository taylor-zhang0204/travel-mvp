import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Sheet, Text, XStack, YStack } from 'tamagui';

import { Calendar } from '@/src/components/icons/src/public/common';
import DateRangePicker from '@/src/components/ui/DateRangePicker';
import { colors } from '@/src/styles/theme';

type Props = {
  checkIn: string;
  checkOut: string;
  onDateRangeChange: (range: { startDate: string; endDate: string }) => void;
};

const DateRangeSection = ({ checkIn, checkOut, onDateRangeChange }: Props) => {
  const { t } = useTranslation();
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
          <Text fontSize={13} fontWeight="500" color={colors.primaryDark} letterSpacing={-0.2}>
            {t('searchForm.checkIn')}
          </Text>
          <XStack
            height={45}
            px={14}
            gap={8}
            onPress={handleOpenDialog}
            bg={colors.backgroundInput}
            rounded={12}
            items="center"
          >
            <Calendar size={16} />
            <Text fontSize={14} color={colors.textTertiary}>
              {checkIn}
            </Text>
          </XStack>
        </YStack>

        {/* Check-out */}
        <YStack flex={1} gap={6}>
          <Text fontSize={13} fontWeight="500" color={colors.primaryDark} letterSpacing={-0.2}>
            {t('searchForm.checkOut')}
          </Text>
          <XStack
            height={45}
            px={14}
            gap={8}
            onPress={handleOpenDialog}
            bg={colors.backgroundInput}
            rounded={12}
            items="center"
          >
            <Calendar size={16} />
            <Text fontSize={14} color={colors.textTertiary}>
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
            <YStack gap={12} pt={24} pb={12} px={22} bg={colors.backgroundInput}>
              <Text fontSize={20} fontWeight="500" color={colors.primaryDark}>
                {t('searchForm.selectDates')}
              </Text>
              {/* Date Info Row */}
              <XStack gap={30} px={8}>
                {/* Check-in */}
                <YStack gap={1}>
                  <Text fontSize={13} fontWeight="500" color={colors.textTertiary}>
                    {t('searchForm.checkIn')}
                  </Text>
                  <Text fontSize={14} fontWeight="600" color={colors.primaryDark}>
                    {range.startDate}
                  </Text>
                </YStack>

                {/* Check-out */}
                <YStack gap={1}>
                  <Text fontSize={13} fontWeight="500" color={colors.textTertiary}>
                    {t('searchForm.checkOut')}
                  </Text>
                  <Text fontSize={14} fontWeight="600" color={colors.primaryDark}>
                    {range.endDate}
                  </Text>
                </YStack>

                {/* Total stay */}
                <YStack gap={1}>
                  <Text fontSize={13} fontWeight="500" color={colors.textTertiary}>
                    {t('searchForm.totalStay')}
                  </Text>
                  <Text fontSize={14} fontWeight="600" color={colors.primaryDark}>
                    {night ? t('searchForm.nights', { count: night }) : ''}
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

            <XStack gap={12} px={30} py={16} justify="flex-end" bg={colors.backgroundInput}>
              <Button
                bg={isDisabled ? colors.buttonDisabled : colors.primary}
                rounded={10}
                height={45}
                flex={1}
                disabled={isDisabled}
                onPress={handleConfirm}
                pressStyle={{ borderWidth: 0 }}
              >
                <Text color={colors.textWhite} fontSize={15} fontWeight="500">
                  {t('searchForm.apply')}
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
