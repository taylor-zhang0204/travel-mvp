import type { GestureResponderEvent } from 'react-native';

export type BaseProps = {
  color?: string;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
};
