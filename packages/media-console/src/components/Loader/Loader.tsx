import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

interface LoaderProps {}

export const Loader = ({}: LoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};
