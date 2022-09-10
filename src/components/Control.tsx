import React, {ReactNode, RefObject} from 'react';
import {TouchableHighlight, ViewProps} from 'react-native';
import {styles} from './styles';

interface ControlProps extends ViewProps {
  children: ReactNode;
  callback?: () => void;
  controlRef?: RefObject<TouchableHighlight>;
  disabled?: boolean;
  style?: any;
  resetControlTimeout?: () => void;
}

export const Control = ({
  children,
  callback,
  controlRef,
  disabled,
  style = {},
  ...props
}: ControlProps) => {
  return (
    <TouchableHighlight
      disabled={disabled}
      ref={controlRef}
      underlayColor="transparent"
      activeOpacity={0.3}
      onPress={() => {
        callback && callback();
      }}
      style={[styles.control, style]}
      {...props}>
      {children}
    </TouchableHighlight>
  );
};
