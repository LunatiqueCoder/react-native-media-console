import React from 'react';
import {
  Animated,
  StyleSheet,
} from 'react-native';
import type {VideoAnimations} from '../types';

export const Overlay = ({
  animations,
}: {animations: VideoAnimations;}) => {

  return (
    <Animated.View
      style={[
        _styles.overlay,
        {
          opacity: animations.controlsOpacity,
        },
      ]}>
    </Animated.View>
  );
};

const _styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor:'rgba(0,0,0,.3)',
    opacity: 0
  },
});
