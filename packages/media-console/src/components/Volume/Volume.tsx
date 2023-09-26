import React from 'react';
import {View, Image, GestureResponderHandlers} from 'react-native';
import {styles} from './styles';

interface VolumeProps {
  volumeFillWidth: number;
  volumeTrackWidth: number;
  volumePosition: number;
  volumePanHandlers: GestureResponderHandlers;
}

export const Volume = ({
  volumeFillWidth,
  volumePosition,
  volumeTrackWidth,
  volumePanHandlers,
}: VolumeProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, {width: volumeFillWidth}]} />
      <View style={[styles.track, {width: volumeTrackWidth}]} />
      <View
        style={[styles.handle, {left: volumePosition - 15}]}
        {...volumePanHandlers}>
        <Image
          style={styles.icon}
          source={require('../../assets/img/volume.png')}
        />
      </View>
    </View>
  );
};
