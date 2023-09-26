import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const useAnimations = (controlAnimationTiming: number) => {
  const bottomControlMarginBottom = useSharedValue(0);
  const opacity = useSharedValue(1);
  const topControlMarginTop = useSharedValue(0);

  const bottomControl = useAnimatedStyle(() => {
    return {
      transform: [{translateY: bottomControlMarginBottom.value}],
    };
  });

  const topControl = useAnimatedStyle(() => {
    return {
      transform: [{translateY: topControlMarginTop.value}],
    };
  });

  const controlsOpacity = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const hideControlAnimation = () => {
    bottomControlMarginBottom.value = withTiming(100, {
      duration: controlAnimationTiming,
    });
    topControlMarginTop.value = withTiming(-100, {
      duration: controlAnimationTiming,
    });
    opacity.value = withTiming(0, {
      duration: controlAnimationTiming,
    });
  };

  const showControlAnimation = () => {
    bottomControlMarginBottom.value = withTiming(0, {
      duration: controlAnimationTiming,
    });
    topControlMarginTop.value = withTiming(0, {
      duration: controlAnimationTiming,
    });
    opacity.value = withTiming(1, {
      duration: controlAnimationTiming,
    });
  };

  const animations = {
    bottomControl,
    topControl,
    controlsOpacity,
    hideControlAnimation,
    showControlAnimation,
    AnimatedView: Animated.View,
  };

  return animations;
};
