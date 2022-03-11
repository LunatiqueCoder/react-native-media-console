import {Dispatch, SetStateAction, useEffect} from 'react';
import {PanResponder} from 'react-native';

interface PanRespondersProps {
  duration: number;
  seekerOffset: number;
  volumeOffset: number;
  loading: boolean;
  seeking: boolean;
  seekerPosition: number;
  seek: (time: number, tolerance?: number) => void;
  seekerWidth: number;
  clearControlTimeout: () => void;
  setVolumePosition: (position: number) => void;
  setCurrentTime: Dispatch<SetStateAction<number>>;
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
  setCurrentTime,
  setSeekerPosition,
  setSeeking,
  setControlTimeout,
  onEnd,
}: PanRespondersProps) => {
  const volumePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      clearControlTimeout();
    },
    onPanResponderMove: (evt, gestureState) => {
      const position = volumeOffset + gestureState.dx;
      setVolumePosition(position);
    },
    onPanResponderRelease: () => {
      setControlTimeout();
    },
  });

  const seekPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      setSeeking(true);
      clearControlTimeout();
      const position = evt.nativeEvent.locationX;
      setSeekerPosition(position);
    },
    onPanResponderMove: (evt, gestureState) => {
      const position = seekerOffset + gestureState.dx;
      setSeekerPosition(position);
      setSeeking(true);
    },
    onPanResponderRelease: () => {
      const percent = seekerPosition / seekerWidth;
      const time = duration * percent;

      if (time >= duration && !loading) {
        if (typeof onEnd === 'function') {
          onEnd();
        }
      }

      setSeeking(false);
      setCurrentTime(time);
      seek(time);
      setControlTimeout();
    },
  });

  useEffect(() => {
    if (seeking) {
      const percent = seekerPosition / seekerWidth;
      const time = duration * percent;
      setCurrentTime(time);
      seek(time);
    }
  }, [duration, seek, seekerPosition, seekerWidth, seeking, setCurrentTime]);

  return {volumePanResponder, seekPanResponder};
};
