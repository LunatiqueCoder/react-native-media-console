import React, {ReactNode, RefObject} from 'react';
import {
  TouchableHighlight,
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {styles} from './styles';

const focusedStyle = {opacity: 1};
const pressedStyle = {opacity: 0.25};

interface ControlProps extends PressableProps {
  children: ReactNode;
  controlRef?: RefObject<TouchableHighlight>;
  resetControlTimeout?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Control = ({
  children,
  controlRef,
  onPress,
  resetControlTimeout,
  style,
  ...props
}: ControlProps) => {
  return (
    <Pressable
      ref={controlRef}
      onPress={(evt) => {
        onPress?.(evt);
        resetControlTimeout?.();
      }}
      style={({focused, pressed}) => [
        styles.control,
        style,
        focused && focusedStyle,
        pressed && pressedStyle,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};
