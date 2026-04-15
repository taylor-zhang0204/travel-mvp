import React, { useMemo } from 'react';
import type { ColorValue } from 'react-native';
import Svg, { Path, Circle, Rect, Ellipse, Line, Polygon, Polyline, G } from 'react-native-svg';

import type { IconData, IconElement, IconBaseProps } from './types';

/**
 * Render a single SVG element from its definition
 */
const renderElement = (element: IconElement, index: number, color?: string): React.ReactNode => {
  const { type, props, children } = element;

  // Build SVG props with color replacement
  const svgProps: Record<string, unknown> = {};

  // Handle fill
  if (props.fill) {
    if (props.fill === 'currentColor' || props.fill === 'currentcolor') {
      svgProps.fill = color as ColorValue;
    } else if (props.fill !== 'none') {
      svgProps.fill = props.fill;
    }
  }

  // Handle stroke
  if (props.stroke) {
    if (props.stroke === 'currentColor' || props.stroke === 'currentcolor') {
      svgProps.stroke = color as ColorValue;
    } else {
      svgProps.stroke = props.stroke;
    }
  }

  // Handle other scalar props
  if (props.strokeWidth !== undefined) svgProps.strokeWidth = props.strokeWidth;
  if (props.strokeLinecap !== undefined) svgProps.strokeLinecap = props.strokeLinecap;
  if (props.strokeLinejoin !== undefined) svgProps.strokeLinejoin = props.strokeLinejoin;
  if (props.opacity !== undefined) svgProps.opacity = props.opacity;
  if (props.clipPath !== undefined) svgProps.clipPath = props.clipPath;
  if (props.transform !== undefined) svgProps.transform = props.transform;
  if (props.rx !== undefined) svgProps.rx = props.rx;
  if (props.ry !== undefined) svgProps.ry = props.ry;

  switch (type) {
    case 'path':
      return <Path key={`path-${index}`} d={String(props.d)} {...svgProps as React.ComponentProps<typeof Path>} />;
    case 'circle':
      return <Circle key={`circle-${index}`} cx={props.cx} cy={props.cy} r={props.r} {...svgProps as React.ComponentProps<typeof Circle>} />;
    case 'rect':
      return <Rect key={`rect-${index}`} x={props.x} y={props.y} width={props.width} height={props.height} {...svgProps as React.ComponentProps<typeof Rect>} />;
    case 'ellipse':
      return <Ellipse key={`ellipse-${index}`} cx={props.cx} cy={props.cy} rx={props.rx} ry={props.ry} {...svgProps as React.ComponentProps<typeof Ellipse>} />;
    case 'line':
      return <Line key={`line-${index}`} x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} {...svgProps as React.ComponentProps<typeof Line>} />;
    case 'polygon':
      return <Polygon key={`polygon-${index}`} points={String(props.points)} {...svgProps as React.ComponentProps<typeof Polygon>} />;
    case 'polyline':
      return <Polyline key={`polyline-${index}`} points={String(props.points)} {...svgProps as React.ComponentProps<typeof Polyline>} />;
    case 'g':
      return (
        <G key={`g-${index}`} {...svgProps as React.ComponentProps<typeof G>}>
          {children?.map((child, childIndex) => renderElement(child, childIndex, color))}
        </G>
      );
    default:
      return null;
  }
};

/**
 * IconBase - Renders SVG icons from JSON data
 * Supports color theming via color prop
 */
const IconBase = React.forwardRef<
  React.ElementRef<typeof Svg>,
  IconBaseProps & { data?: IconData }
>(({ data, size = 24, color = '#000000', style, onPress, ...restProps }, ref) => {
  const elements = useMemo(() => {
    if (!data?.elements) return [];
    return data.elements;
  }, [data?.elements]);

  if (!data) {
    return null;
  }

  // Note: onPress is handled by the parent Pressable wrapper in generated components

  return (
    <Svg
      ref={ref}
      width={size}
      height={size}
      viewBox={data.viewBox || '0 0 24 24'}
      fill="none"
      style={style}
      {...restProps}
    >
      {elements.map((element, index) => renderElement(element, index, color))}
    </Svg>
  );
});

IconBase.displayName = 'IconBase';

export default IconBase;
