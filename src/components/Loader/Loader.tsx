import React from 'react';
import {Animated, View} from 'react-native';
import {styles} from './styles';
import type {VideoAnimations} from '../../types';

interface LoaderProps {
  animations: VideoAnimations;
}

export const Loader = ({animations}: LoaderProps) => (
  <View style={styles.container}>
    <Animated.Image
      source={require('../../assets/img/loader-icon.png')}
      style={[
        styles.icon,
        {
          transform: [
            {
              rotate: animations.loader.rotate.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    />
  </View>
);
