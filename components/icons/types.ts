import type { ImageStyle, ViewStyle, GestureResponderEvent } from 'react-native';

export interface IconBaseProps {
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface ImageIconBaseProps {
  size?: number;
  style?: ImageStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface IconData {
  name: string;
  viewBox: string;
  elements: IconElement[];
}

export interface IconElement {
  type: 'path' | 'circle' | 'rect' | 'ellipse' | 'line' | 'polygon' | 'polyline' | 'g' | 'defs';
  props: Record<string, string | number | undefined>;
  children?: IconElement[];
}
