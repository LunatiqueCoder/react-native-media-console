import React, {memo} from 'react';
import {
  Animated,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  GestureResponderHandlers,
} from 'react-native';
import {Back, NullControl, Volume} from './index';
import {styles} from './styles';
import type {VideoAnimations} from '../types';

interface TopControlProps {
  panHandlers: GestureResponderHandlers;
  animations: VideoAnimations;
  disableBack: boolean;
  disableVolume: boolean;
  volumeFillWidth: number;
  volumeTrackWidth: number;
  volumePosition: number;
  onBack: () => void;
  resetControlTimeout: () => void;
}

export const TopControls = memo(
  ({
    panHandlers,
    animations,
    disableBack,
    disableVolume,
    volumeFillWidth,
    volumePosition,
    volumeTrackWidth,
    onBack,
    resetControlTimeout,
  }: TopControlProps) => {
    const backControl = disableBack ? (
      <NullControl />
    ) : (
      <Back onBack={onBack} resetControlTimeout={resetControlTimeout} />
    );

    const volumeControl = disableVolume ? (
      <NullControl />
    ) : (
      <Volume
        volumeFillWidth={volumeFillWidth}
        volumeTrackWidth={volumeTrackWidth}
        volumePosition={volumePosition}
        volumePanHandlers={panHandlers}
      />
    );

    return (
      <Animated.View
        style={[
          _styles.top,
          {
            opacity: animations.controlsOpacity,
            marginTop: animations.topControl.marginTop,
          },
        ]}>
        <ImageBackground
          source={require('../assets/img/top-vignette.png')}
          style={[styles.column]}
          imageStyle={[styles.vignette]}>
          <SafeAreaView style={_styles.topControlGroup}>
            {backControl}
            <View style={_styles.pullRight}>{volumeControl}</View>
          </SafeAreaView>
        </ImageBackground>
      </Animated.View>
    );
  },
);

const _styles = StyleSheet.create({
  pullRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  topControlGroup: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 12,
    marginBottom: 18,
  },
});
