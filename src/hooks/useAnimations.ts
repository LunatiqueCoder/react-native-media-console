import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimations = (
  loading: boolean,
  controlAnimationTiming: number,
) => {
  const bottomControlMarginBottom = useRef(new Animated.Value(0)).current;
  const controlsOpacity = useRef(new Animated.Value(1)).current;
  const topControlMarginTop = useRef(new Animated.Value(0)).current;
  const videoOpacity = useRef(new Animated.Value(-100)).current;
  const loaderRotateAnim = useRef(new Animated.Value(0)).current;

  const animations = {
    bottomControl: {
      marginBottom: bottomControlMarginBottom,
    },
    topControl: {
      marginTop: topControlMarginTop,
    },
    video: {
      opacity: videoOpacity,
    },
    loader: {
      rotate: loaderRotateAnim,
      MAX_VALUE: 360,
    },
    controlsOpacity,
  };

  const hideControlAnimation = () => {
    Animated.parallel([
      Animated.timing(animations.controlsOpacity, {
        toValue: 0,
        duration: controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(animations.topControl.marginTop, {
        toValue: -100,
        duration: controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(animations.bottomControl.marginBottom, {
        toValue: -100,
        duration: controlAnimationTiming,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const showControlAnimation = () => {
    Animated.parallel([
      Animated.timing(animations.controlsOpacity, {
        toValue: 1,
        duration: controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(animations.topControl.marginTop, {
        toValue: 0,
        duration: controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(animations.bottomControl.marginBottom, {
        toValue: 0,
        duration: controlAnimationTiming,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    if (loading) {
      const loadAnimation = () => {
        if (loading) {
          Animated.sequence([
            Animated.timing(animations.loader.rotate, {
              toValue: animations.loader.MAX_VALUE,
              duration: 1500,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
            Animated.timing(animations.loader.rotate, {
              toValue: 0,
              duration: 0,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]).start(loadAnimation);
        }
      };
      loadAnimation();
    }
  }, [animations.loader.MAX_VALUE, animations.loader.rotate, loading]);

  return {
    animations,
    hideControlAnimation,
    showControlAnimation,
  };
};
