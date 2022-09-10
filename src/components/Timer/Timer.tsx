import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
import {Control} from '../Control';

interface TimerProps {
  toggleTimer: () => void;
  resetControlTimeout: () => void;
  children: ReactNode;
  disableControlsWhileHiddenForTV: boolean;
}

export const Timer = ({
  children,
  toggleTimer,
  resetControlTimeout,
  disableControlsWhileHiddenForTV,
}: TimerProps) => {
  return (
    <Control
      callback={toggleTimer}
      resetControlTimeout={resetControlTimeout}
      style={styles.timer}
      disabled={disableControlsWhileHiddenForTV}>
      <Text style={styles.timerText}>{children}</Text>
    </Control>
  );
};
