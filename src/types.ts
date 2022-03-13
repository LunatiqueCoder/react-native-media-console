import type {RefObject} from 'react';
import type {Animated} from 'react-native';
import type VideoResource from 'react-native-video';
import type {VideoProperties} from 'react-native-video';

export interface VideoAnimations {
  bottomControl: {marginBottom: Animated.Value};
  topControl: {marginTop: Animated.Value};
  video: {
    opacity: Animated.Value;
  };
  loader: {
    rotate: Animated.Value;
    MAX_VALUE: number;
  };
  controlsOpacity: Animated.Value;
}

export interface VideoPlayerProps extends VideoProperties {
  toggleResizeModeOnFullscreen?: boolean;
  controlAnimationTiming?: number;
  doubleTapTime?: number;
  isFullscreen?: boolean;
  showOnStart?: boolean;
  title?: string;
  showTimeRemaining?: boolean;
  showDuration?: boolean;
  showHours?: boolean;
  onBack?: () => void;
  onEnterFullscreen?: () => void;
  onExitFullscreen?: () => void;
  onHideControls?: () => void;
  onShowControls?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  controlTimeoutDelay?: number;
  tapAnywhereToPause?: boolean;
  videoStyle?: any;
  style?: any;
  seekColor?: string;
  disableBack?: boolean;
  disableVolume?: boolean;
  disableFullscreen?: boolean;
  disableTimer?: boolean;
  disableSeekbar?: boolean;
  disablePlayPause?: boolean;
  navigator?: any;
  videoRef?: RefObject<VideoResource>;
  rewindTime?: number;
}
