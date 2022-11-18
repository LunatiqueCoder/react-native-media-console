import React, {Dispatch, SetStateAction} from 'react';
import {
  Animated,
  ImageBackground,
  View,
  StyleSheet,
  GestureResponderHandlers,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Timer} from './Timer';
import {Title} from './Title';
import {NullControl} from './NullControl';
import {Fullscreen} from './Fullscreen';
import {Seekbar} from './Seekbar';
import {calculateTime} from '../utils';
import type {VideoAnimations} from '../types';
import {styles} from './styles';

interface BottomControlsProps {
  showControls: boolean;
  animations: VideoAnimations;
  panHandlers: GestureResponderHandlers;
  disableTimer: boolean;
  disableSeekbar: boolean;
  showDuration: boolean;
  showHours: boolean;
  paused: boolean;
  showTimeRemaining: boolean;
  currentTime: number;
  duration: number;
  seekColor: string;
  title: string;
  toggleTimer: () => void;
  resetControlTimeout: () => void;
  seekerFillWidth: number;
  seekerPosition: number;
  setSeekerWidth: Dispatch<SetStateAction<number>>;
  isFullscreen: boolean;
  disableFullscreen: boolean;
  toggleFullscreen: () => void;
}

export const BottomControls = ({
  showControls,
  animations,
  panHandlers,
  disableSeekbar,
  disableTimer,
  duration,
  seekColor,
  showDuration,
  showHours,
  showTimeRemaining,
  currentTime,
  title,
  toggleTimer,
  resetControlTimeout,
  seekerFillWidth,
  seekerPosition,
  setSeekerWidth,
  isFullscreen,
  disableFullscreen,
  toggleFullscreen,
}: BottomControlsProps) => {
  const timerControl = disableTimer ? (
    <NullControl />
  ) : (
    <Timer
      resetControlTimeout={resetControlTimeout}
      toggleTimer={toggleTimer}
      showControls={showControls}>
      {calculateTime({
        showDuration,
        showHours,
        showTimeRemaining,
        time: currentTime,
        duration,
      })}
    </Timer>
  );

  const seekbarControl = disableSeekbar ? (
    <NullControl />
  ) : (
    <Seekbar
      seekerFillWidth={seekerFillWidth}
      seekerPosition={seekerPosition}
      seekColor={seekColor}
      seekerPanHandlers={panHandlers}
      setSeekerWidth={setSeekerWidth}
    />
  );

  const fullscreenControl = disableFullscreen ? (
    <NullControl />
  ) : (
    <Fullscreen
      isFullscreen={isFullscreen}
      toggleFullscreen={toggleFullscreen}
      resetControlTimeout={resetControlTimeout}
      showControls={showControls}
    />
  );

  return (
    <Animated.View
      style={[
        _styles.bottom,
        {
          opacity: animations.controlsOpacity,
          marginBottom: animations.bottomControl.marginBottom,
        },
      ]}>
      <ImageBackground
        source={require('../assets/img/bottom-vignette.png')}
        style={[styles.column]}
        imageStyle={[styles.vignette]}>
        <View style={[styles.row, _styles.bottomControlGroup]}>
          {timerControl}
          <Title title={title} />
          {fullscreenControl}
        </View>
        <SafeAreaView style={styles.seekBarContainer} edges={['bottom']}>
          {seekbarControl}
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};

const _styles = StyleSheet.create({
  bottom: {
    alignItems: 'stretch',
    flex: 2,
    justifyContent: 'flex-end',
  },
  bottomControlGroup: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 0,
  },
});
