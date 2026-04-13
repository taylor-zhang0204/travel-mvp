import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

type DateRange = {
  startDate: string;
  endDate: string;
};

type Props = {
  initialRange?: DateRange;
  onRangeChange?: (range: DateRange) => void;
  color?: string;
};

export default function DateRangePicker({
  initialRange,
  onRangeChange,
  color = '#50cebb',
}: Props) {
  const [range, setRange] = useState<DateRange>(
    initialRange ?? { startDate: '', endDate: '' },
  );

  useEffect(() => {
    if (initialRange) {
      setRange(initialRange);
    }
  }, [initialRange]);

  const getMarkedDates = (): MarkedDates => {
    const { startDate, endDate } = range;
    const marked: MarkedDates = {};

    if (!startDate) return marked;

    marked[startDate] = {
      startingDay: true,
      color,
      textColor: 'white',
    };

    if (endDate && startDate !== endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const current = new Date(start);
      current.setDate(current.getDate() + 1);

      while (current < end) {
        const dateString = current.toISOString().split('T')[0];
        console.log(dateString);
        marked[dateString] = {
          color: '#70d7c7',
          textColor: 'white',
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
  };

  const handleDayPress = (day: DateData) => {
    const { startDate, endDate } = range;

    if (!startDate || (startDate && endDate)) {
      const newRange = { startDate: day.dateString, endDate: '' };
      setRange(newRange);
      onRangeChange?.(newRange);
    } else {
      if (day.dateString < startDate) {
        const newRange = { startDate: day.dateString, endDate: startDate };
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
    <Calendar
      style={{
        width: 350,
      }}
      theme={{
        textDayFontSize: 14,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 12,
      }}
      renderArrow={(direction) => (
        <Text style={{ fontSize: 20, color: 'gray' }}>
          {direction === 'left' ? '‹' : '›'}
        </Text>
      )}
      dayComponent={({ date, marking, state }) => {
        if (!date) return null;

        if (!marking) {
          const textColor = state === 'disabled' ? '#d9e1e8' : '#2d4150';
          return (
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: textColor, fontSize: 14 }}>{date.day}</Text>
            </View>
          );
        }

        const { startingDay, endingDay, color: bgColor, textColor } = marking;
        const isStart = startingDay;
        const isEnd = endingDay;

        return (
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: bgColor,
              borderTopLeftRadius: isStart ? 16 : 0,
              borderBottomLeftRadius: isStart ? 16 : 0,
              borderTopRightRadius: isEnd ? 16 : 0,
              borderBottomRightRadius: isEnd ? 16 : 0,
            }}
          >
            <Text style={{ color: textColor, fontSize: 14 }}>{date.day}</Text>
            {isStart && (
              <Text style={{ color: textColor, fontSize: 8 }}>CHECK-IN</Text>
            )}
            {isEnd && (
              <Text style={{ color: textColor, fontSize: 8 }}>CHECK-OUT</Text>
            )}
          </View>
        );
      }}
      markingType='period'
      markedDates={getMarkedDates()}
      onDayPress={handleDayPress}
    />
  );
}
