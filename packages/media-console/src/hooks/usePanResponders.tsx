import {Dispatch, SetStateAction, useEffect} from 'react';
import {PanResponder} from 'react-native';
import {VideoPlayerProps} from '../types';

interface PanRespondersProps extends Pick<VideoPlayerProps, 'pan'> {
  duration: number;
  seekerOffset: number;
  volumeOffset: number;
  loading: boolean;
  seeking: boolean;
  seekerPosition: number;
  seek?: (time: number, tolerance?: number) => void;
  seekerWidth: number;
  clearControlTimeout: () => void;
  setVolumePosition: (position: number) => void;
  setSeekerPosition: (position: number) => void;
  setSeeking: Dispatch<SetStateAction<boolean>>;
  setControlTimeout: () => void;
  onEnd: () => void;
}

export const usePanResponders = ({
  duration,
  seekerOffset,
  volumeOffset,
  loading,
  seeking,
  seekerPosition,
  seek,
  seekerWidth,
  clearControlTimeout,
  setVolumePosition,
  setSeekerPosition,
  setSeeking,
  setControlTimeout,
  onEnd,
  pan: {horizontal = true, inverted = false, parentList} = {},
}: PanRespondersProps) => {
  const {ref, scrollEnabled = true} = parentList || {};

  const enableParentScroll = () =>
    ref?.current?.setNativeProps({scrollEnabled});

  const disableParentScroll = () =>
    ref?.current?.setNativeProps({scrollEnabled: false});

  /**
   * Options to make the video player work seamlessly within FlatLists or ScrollViews.
   * @link https://github.com/LunatiqueCoder/react-native-media-console/issues/104
   */
  const parentScrollPanOptions = {
    onPanResponderEnd: enableParentScroll,
    onPanResponderTerminationRequest: () => false, // https://stackoverflow.com/a/76875305/14056591
  };

  const volumePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      clearControlTimeout();
      disableParentScroll();
    },
    onPanResponderMove: (_evt, gestureState) => {
      const diff = horizontal ? gestureState.dx : gestureState.dy;
      const position = volumeOffset + diff * (inverted ? -1 : 1);
      setVolumePosition(position);
    },
    onPanResponderRelease: () => {
      setControlTimeout();
    },
    ...parentScrollPanOptions,
  });

  const seekPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      setSeeking(true);
      clearControlTimeout();
      const position = evt.nativeEvent.locationX;
      setSeekerPosition(position);
      disableParentScroll();
    },
    onPanResponderMove: (_evt, gestureState) => {
      const diff = horizontal ? gestureState.dx : gestureState.dy;
      const position = seekerOffset + diff * (inverted ? -1 : 1);
      setSeekerPosition(position);
      setSeeking(true);
    },
    onPanResponderRelease: () => {
      const percent = seekerPosition / seekerWidth;
      const time = duration * percent;

      if (time >= duration && !loading) {
        onEnd?.();
      }

      setSeeking(false);
      seek && seek(time);
    },
    ...parentScrollPanOptions,
  });

  useEffect(() => {
    if (seeking) {
      const percent = seekerPosition / seekerWidth;
      const time = duration * percent;
      seek && seek(time);
    }
  }, [duration, seek, seekerPosition, seekerWidth, seeking]);

  return {volumePanResponder, seekPanResponder};
};
