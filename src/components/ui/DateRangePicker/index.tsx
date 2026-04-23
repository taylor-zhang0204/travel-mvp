import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons-2';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { CalendarList, DateData } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';
import { Text, XStack } from 'tamagui';

type DateRange = {
  startDate: string;
  endDate: string;
};

type Props = {
  initialRange?: DateRange;
  onRangeChange?: (range: DateRange) => void;
  color?: string;
};

const PrimaryColor = '#1566D1';
const SecondaryColor = '#EBF4FF';
const CellSize = 50;

const DateRangePicker = ({ initialRange, onRangeChange, color = PrimaryColor }: Props) => {
  const [range, setRange] = useState<DateRange>(initialRange ?? { startDate: '', endDate: '' });

  const getMarkedDates = useCallback(() => {
    const { startDate, endDate } = range;
    const marked: MarkedDates = {};

    if (!startDate) return marked;

    const isSingleDate = !endDate || startDate === endDate;
    marked[startDate] = {
      startingDay: true,
      color,
      textColor: 'white',
      ...(isSingleDate && { endingDay: true }), // 单选日期时同时设置 endingDay
    };

    if (endDate && startDate !== endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const current = new Date(start);
      current.setDate(current.getDate() + 1);

      while (current < end) {
        const dateString = dayjs(current).format('YYYY-MM-DD');
        marked[dateString] = {
          color: SecondaryColor,
        };
        current.setDate(current.getDate() + 1);
      }

      marked[endDate] = {
        endingDay: true,
        color,
        textColor: 'white',
      };
    }

    return marked;
  }, [range, color]);

  useEffect(() => {
    const { startDate, endDate } = range;
    if (startDate && endDate) {
      getMarkedDates();
    }
  }, [range, getMarkedDates]);

  const handleDayPress = (day: DateData) => {
    const { startDate, endDate } = range;

    if (!startDate || (startDate && endDate)) {
      const newRange = { startDate: day.dateString, endDate: '' };
      setRange(newRange);
      onRangeChange?.(newRange);
    } else {
      if (day.dateString === startDate) {
        return;
      }
      if (day.dateString < startDate) {
        const newRange = { startDate: day.dateString, endDate: '' };
        setRange(newRange);
        onRangeChange?.(newRange);
      } else {
        const newRange = { startDate, endDate: day.dateString };
        setRange(newRange);
        onRangeChange?.(newRange);
      }
    }
  };

  return (
    <CalendarList
      calendarWidth={CellSize * 7}
      theme={{
        textDayFontSize: 14,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 12,
      }}
      // 最小日期, 默认当前日期，更早时间置灰不可选择
      minDate={dayjs().format('YYYY-MM-DD')}
      // 向前滚动的最大月数
      pastScrollRange={0}
      // 向后滚动的最大月数
      futureScrollRange={12}
      renderArrow={(direction) => (
        <Text fontSize={20} color="gray">
          {direction === 'left' ? <ChevronLeft /> : <ChevronRight />}
        </Text>
      )}
      dayComponent={({ date, marking, state, onPress }) => {
        if (!date) return null;

        const handlePress = () => {
          onPress?.(date);
        };

        if (!marking) {
          const textColor = state === 'disabled' ? '#d9e1e8' : '#2d4150';
          return (
            <XStack
              width={CellSize}
              height={CellSize}
              justify="center"
              items="center"
              onPress={handlePress}
            >
              <Text color={textColor} fontSize={14}>
                {date.day}
              </Text>
            </XStack>
          );
        }

        const { startingDay, endingDay, color: bgColor, textColor } = marking;

        // isSingle: 单选日期（同时有 startingDay 和 endingDay）→ 全圆角
        const isSingle = startingDay && endingDay;
        // isRangeStart: 范围起点（只有 startingDay）→ 左边圆角，右边直角
        const isRangeStart = startingDay && !endingDay;
        // isRangeEnd: 范围终点（只有 endingDay）→ 左边直角，右边圆角
        const isRangeEnd = endingDay && !startingDay;

        return (
          <XStack
            width={CellSize}
            height={CellSize}
            justify="center"
            items="center"
            onPress={handlePress}
            style={{
              backgroundColor: bgColor,
              borderTopLeftRadius: isSingle || isRangeStart ? 50 : 0,
              borderBottomLeftRadius: isSingle || isRangeStart ? 50 : 0,
              borderTopRightRadius: isSingle || isRangeEnd ? 50 : 0,
              borderBottomRightRadius: isSingle || isRangeEnd ? 50 : 0,
            }}
          >
            {/* @ts-ignore-next-line */}
            <Text color={textColor} fontSize={14}>
              {date.day}
            </Text>
          </XStack>
        );
      }}
      markingType="period"
      markedDates={getMarkedDates()}
      onDayPress={handleDayPress}
    />
  );
};

export default DateRangePicker;
