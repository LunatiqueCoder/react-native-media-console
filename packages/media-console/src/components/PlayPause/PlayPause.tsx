import React, {createRef} from 'react';
import {View, Image, Platform, TouchableHighlight} from 'react-native';
import {Control} from '../Control';
import {NullControl} from '../NullControl';
import type {VideoAnimations} from '../../types';
import {styles} from './styles';

export const playPauseRef = createRef<TouchableHighlight>();

interface PlayPauseProps {
  animations: VideoAnimations;
  disablePlayPause: boolean;
  disableSeekButtons: boolean;
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
  animations: {AnimatedView, ...animations},
  disablePlayPause,
  disableSeekButtons,
  paused,
  togglePlayPause,
  resetControlTimeout,
  showControls,
  onPressForward,
  onPressRewind,
}: PlayPauseProps) => {
  let source = paused ? play : pause;

  const animatedStyles = {
    zIndex: showControls ? 99999 : 0,
  };

  if (disablePlayPause) {
    return <NullControl />;
  }

  return (
    <AnimatedView
      pointerEvents={'box-none'}
      style={[styles.container, animatedStyles, animations.controlsOpacity]}
    >
      {!disableSeekButtons ? (
        <Control
          disabled={!showControls}
          onPress={onPressRewind}
          resetControlTimeout={resetControlTimeout}
        >
          <Image source={rewind} resizeMode={'contain'} />
        </Control>
      ) : null}

      {/*
       * Useless <View />, I know. But it fixes this bug:
       * https://github.com/LunatiqueCoder/react-native-media-console/issues/107
       */}
      <View style={styles.playContainer}>
        <Control
          disabled={!showControls}
          onPress={togglePlayPause}
          resetControlTimeout={resetControlTimeout}
          style={styles.play}
          controlRef={playPauseRef}
          {...(Platform.isTV ? {hasTVPreferredFocus: showControls} : {})}
        >
          <Image source={source} resizeMode={'contain'} />
        </Control>
      </View>
      {!disableSeekButtons ? (
        <Control
          disabled={!showControls}
          onPress={onPressForward}
          resetControlTimeout={resetControlTimeout}
        >
          <Image source={forward} resizeMode={'contain'} />
        </Control>
      ) : null}
    </AnimatedView>
  );
};
