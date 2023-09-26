import React from 'react';
import {Image} from 'react-native';
import {Control} from '../Control';

interface BackProps {
  onBack: () => void;
  resetControlTimeout?: () => void;
  showControls: boolean;
}

export const Back = ({onBack, showControls}: BackProps) => {
  return (
    <Control callback={onBack} disabled={!showControls}>
      <Image source={require('../../assets/img/back.png')} />
    </Control>
  );
};
