import { Link } from 'expo-router';
import { View } from 'react-native';
import DateRangePicker from '../components/DateRangePicker';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href='/component'>Open components</Link>
      <Link href='/component1'>Open components</Link>

      <DateRangePicker
        initialRange={{ startDate: '2026-03-27', endDate: '2026-04-05' }}
      />
    </View>
  );
}
