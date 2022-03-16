import React from 'react';
import {Animated, Image} from 'react-native';
import {Control, NullControl} from '../';
import type {VideoAnimations} from '../../types';
import {styles} from './styles';

interface PlayPauseProps {
  animations: VideoAnimations;
  disablePlayPause: boolean;
  paused: boolean;
  togglePlayPause: () => void;
  resetControlTimeout: () => void;
  showControls: boolean;
  onPressForward: () => void;
  onPressRewind: () => void;
}

const play = require('../../assets/img/play.png');
const pause = require('../../assets/img/pause.png');
const rewind = require('../../assets/img/rewind.png');
const forward = require('../../assets/img/forward.png');

export const PlayPause = ({
  animations,
  disablePlayPause,
  paused,
  togglePlayPause,
  resetControlTimeout,
  showControls,
  onPressForward,
  onPressRewind,
}: PlayPauseProps) => {
  let source = paused ? play : pause;

  const animatedStyles = {
    opacity: animations.controlsOpacity,
    zIndex: showControls ? 99999 : 0,
  };

  if (disablePlayPause) {
    return <NullControl />;
  }

  return (
    <Animated.View
      pointerEvents={'box-none'}
      style={[styles.container, animatedStyles]}>
      <Control
        callback={onPressRewind}
        resetControlTimeout={resetControlTimeout}>
        <Image source={rewind} resizeMode={'contain'} style={styles.rewind} />
      </Control>
      <Control
        callback={togglePlayPause}
        resetControlTimeout={resetControlTimeout}
        style={styles.playContainer}>
        <Image source={source} resizeMode={'contain'} style={styles.play} />
      </Control>
      <Control
        callback={onPressForward}
        resetControlTimeout={resetControlTimeout}>
        <Image source={forward} resizeMode={'contain'} style={styles.rewind} />
      </Control>
    </Animated.View>
  );
};
