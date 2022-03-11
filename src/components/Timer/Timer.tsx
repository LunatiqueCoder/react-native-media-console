import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
import {Control} from '../Control';

interface TimerProps {
  toggleTimer: () => void;
  resetControlTimeout: () => void;
  children: ReactNode;
}

export const Timer = ({
  children,
  toggleTimer,
  resetControlTimeout,
}: TimerProps) => {
  return (
    <Control
      callback={toggleTimer}
      resetControlTimeout={resetControlTimeout}
      style={styles.timer}>
      <Text style={styles.timerText}>{children}</Text>
    </Control>
  );
};
