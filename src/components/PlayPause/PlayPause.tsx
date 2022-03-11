import {Control} from 'organisms/VideoPlayer/components';
import {Animated, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {VideoAnimations} from '../../types';
import {NullControl} from 'organisms/VideoPlayer/components/NullControl';

interface PlayPauseProps {
  animations: VideoAnimations;
  disablePlayPause: boolean;
  paused: boolean;
  togglePlayPause: () => void;
  resetControlTimeout: () => void;
  showControls: boolean;
}

const play = require('../../assets/assets/img/play2.png');
const pause = require('../../assets/assets/img/pause2.png');

export const PlayPause = ({
  animations,
  disablePlayPause,
  paused,
  togglePlayPause,
  resetControlTimeout,
  showControls,
}: PlayPauseProps) => {
  let source = paused ? play : pause;

  if (disablePlayPause) {
    return <NullControl />;
  }

  return (
    <Animated.View
      pointerEvents={'box-none'}
      style={[
        styles.container,
        {opacity: animations.controlsOpacity, zIndex: showControls ? 99999 : 0},
      ]}>
      <Control
        callback={togglePlayPause}
        resetControlTimeout={resetControlTimeout}>
        <Image
          source={source}
          resizeMode={'contain'}
          style={{aspectRatio: 0.5}}
        />
      </Control>
    </Animated.View>
  );
};
