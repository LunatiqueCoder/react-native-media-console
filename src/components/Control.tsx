import React, {ReactNode} from 'react';
import {TouchableHighlight} from 'react-native';
import {styles} from './styles';

interface ControlProps {
  children: ReactNode;
  callback?: () => void;
  style?: any;
  resetControlTimeout?: () => void;
}

export const Control = ({children, callback, style = {}}: ControlProps) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={0.3}
      onPress={() => {
        callback && callback();
      }}
      style={[styles.control, style]}>
      {children}
    </TouchableHighlight>
  );
};
