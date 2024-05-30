import React, {ReactNode} from 'react';
import {
  TouchableWithoutFeedback,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {TVOSSupport} from './TVOSSupport';
import {_styles} from '../styles';

interface OSSupport {
  children: ReactNode;
  containerStyles: StyleProp<ViewStyle>;
  onScreenTouch: () => void;
  showControls: boolean;
  testID?: string;
}

export const PlatformSupport = ({
  children,
  onScreenTouch,
  containerStyles,
  showControls,
  testID,
}: OSSupport) => {
  if (Platform.isTV) {
    return (
      <>
        <TVOSSupport
          showControls={showControls}
          onScreenTouch={onScreenTouch}
        />
        {children}
      </>
    );
  }

  return (
    <TouchableWithoutFeedback
      testID={testID}
      onPress={onScreenTouch}
      style={[_styles.player.container, containerStyles]}>
      {children}
    </TouchableWithoutFeedback>
  );
};
