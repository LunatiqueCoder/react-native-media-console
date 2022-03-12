import React from 'react';
import {Image} from 'react-native';
import {Control} from '../Control';

interface BackProps {
  onBack: () => void;
  resetControlTimeout?: () => void;
}

export const Back = ({onBack}: BackProps) => {
  return (
    <Control callback={onBack}>
      <Image source={require('../../assets/img/back.png')} />
    </Control>
  );
};
