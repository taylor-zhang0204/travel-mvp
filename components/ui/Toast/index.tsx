import { View } from 'react-native';
import { Text } from 'tamagui';

const SuccessToast = ({ text1 }: { text1: string }) => (
  <View style={{ backgroundColor: '#101828', borderRadius: 8, padding: 16, minHeight: 50 }}>
    <Text style={[{ color: '#fff', fontSize: 14, fontWeight: '500' }]}>{text1}</Text>
  </View>
);

const ErrorToast = ({ text1 }: { text1: string }) => (
  <View style={{ backgroundColor: '#dc2626', borderRadius: 8, padding: 16, minHeight: 50 }}>
    <Text style={[{ color: '#fff', fontSize: 14, fontWeight: '500' }]}>{text1}</Text>
  </View>
);

export { ErrorToast, SuccessToast };
