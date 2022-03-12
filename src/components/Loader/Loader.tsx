import React from 'react';
import {Animated, View} from 'react-native';
import {styles} from './styles';
import {VideoAnimations} from '../../types';

interface LoaderProps {
  loading: boolean;
  animations: VideoAnimations;
}

export const Loader = ({loading, animations}: LoaderProps) => {
  if (loading) {
    return (
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
  }

  return null;
};
