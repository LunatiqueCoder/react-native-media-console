import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Control} from './Control';

interface CaptionProps {
  isCaptionEnabled: boolean;
  toggleCaption: () => void;
  showControls: boolean;
}

export const Caption = ({
  isCaptionEnabled,
  toggleCaption,
  showControls,
}: CaptionProps) => {
  return (
    <Control
      callback={toggleCaption}
      style={[styles.caption, isCaptionEnabled && styles.captionActive]}
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
