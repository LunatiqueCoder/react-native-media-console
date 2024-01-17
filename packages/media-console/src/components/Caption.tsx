import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Control} from './Control';

interface CaptionProps {
  isCaption: boolean;
  toggleCaption: () => void;
  showControls: boolean;
}

export const Caption = ({
  isCaption,
  toggleCaption,

  showControls,
}: CaptionProps) => {
  return (
    <Control
      callback={toggleCaption}
      style={[styles.caption, isCaption && styles.captionActive]}
      disabled={!showControls}>
      <Image source={require('../assets/img/caption.png')} />
    </Control>
  );
};

const styles = StyleSheet.create({
  caption: {
    flexDirection: 'row',
    padding: 4,
  },
  captionActive: {
    opacity: 1,
  },
});
