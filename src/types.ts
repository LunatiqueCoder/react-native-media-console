import type {RefObject} from 'react';
import type {Animated, ViewStyle} from 'react-native';
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
  /**
   * If true, clicking the fullscreen button will toggle the <Video />
   * component between cover/contain, set to false
   * if you want to customize fullscreen behaviour
   *
   * @default false
   */
  toggleResizeModeOnFullscreen?: boolean;

  /**
   * The amount of time (in milliseconds) to animate the controls in and out.
   *
   * @default 500
   */
  controlAnimationTiming?: number;

  /**
   * Tapping twice within this amount of time in milliseconds is considered a double tap.
   * Single taps will not be actioned until this time has expired
   *
   * @default 100
   */
  doubleTapTime?: number;

  /**
   * The VideoPlayer fullscreen state.
   *
   * @default false
   */
  isFullscreen?: boolean;

  /**
   * Show or hide the controls on first render
   *
   * @default false
   */
  showOnStart?: boolean;

  /**
   * Title of the video
   */
  title?: string;

  /**
   * If true, show the time remaing, else show the current time in the Player.
   *
   * @default false
   */
  showTimeRemaining?: boolean;

  /**
   * Show duration of the media.
   *
   * @default false
   */
  showDuration?: boolean;

  /**
   * If true, convert time to hours in the Player
   *
   * @default false
   */
  showHours?: boolean;

  /**
   * Function fired when back button is pressed, override if using custom navigation
   */
  onBack?: () => void;

  /**
   * Fired when the video enters fullscreen after the fullscreen button is pressed
   */
  onEnterFullscreen?: () => void;

  /**
   * Fired when the video exits fullscreen after the fullscreen button is pressed
   */
  onExitFullscreen?: () => void;

  /**
   * Fired when the controls disappear
   */
  onHideControls?: () => void;

  /**
   * Fired when the controls appear
   */
  onShowControls?: () => void;

  /**
   * Fired when the video is paused after the play/pause button is pressed
   */
  onPause?: () => void;

  /**
   * Fired when the video begins playing after the play/pause button is pressed
   */
  onPlay?: () => void;

  /**
   * Hide controls after X amount of time in milliseconds
   *
   * @default 15000
   */
  controlTimeoutDelay?: number;

  /**
   * If true, single tapping anywhere on the video (other than a control) toggles between playing and paused.
   *
   * @default false
   */
  tapAnywhereToPause?: boolean;

  /**
   * StyleSheet passed to the <Video /> component
   *
   */
  videoStyle?: ViewStyle;

  /**
   * Container styles
   *
   */
  containerStyle?: ViewStyle;

  /**
   * Fill/handle colour of the seekbar
   *
   * @default '#FFF'
   */
  seekColor?: string;

  /**
   * Hide the back button
   *
   * @default false
   */
  disableBack?: boolean;

  /**
   * Hide the Volume control
   *
   * @default false
   */
  disableVolume?: boolean;

  /**
   * Hide the fullscreen button
   *
   * @default false
   */
  disableFullscreen?: boolean;

  /**
   * Hide the timer
   *
   * @default false
   */
  disableTimer?: boolean;

  /**
   * Hide the seekbar
   *
   * @default false
   */
  disableSeekbar?: boolean;

  /**
   * Hide the play/pause toggle and the rewind/forward buttons
   *
   * @default false
   */
  disablePlayPause?: boolean;
  /**
   * When using the default React Native navigator and do not override the `onBack` function,
   * you'll need to pass the navigator to the VideoPlayer for it to function
   *
   * @default null
   */
  navigator?: any;

  /**
   * Pass ref to the `<Video/>` component
   *
   * @default false
   */
  videoRef?: RefObject<VideoResource>;

  /**
   * Number of seconds to rewind or forward.
   *
   * @default 15
   */
  rewindTime?: number;
}
