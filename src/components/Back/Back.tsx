import React from 'react';
import {Image} from 'react-native';
import {Control} from '../Control';

interface BackProps {
  onBack: () => void;
  resetControlTimeout?: () => void;
  disableControlsWhileHiddenForTV: boolean;
}

export const Back = ({onBack, disableControlsWhileHiddenForTV}: BackProps) => {
  return (
    <Control callback={onBack} disabled={disableControlsWhileHiddenForTV}>
      <Image source={require('../../assets/img/back.png')} />
    </Control>
  );
};
