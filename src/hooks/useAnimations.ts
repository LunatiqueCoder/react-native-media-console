import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export const useAnimations = (
  controlAnimationTiming: number,
) => {

  const bottomControlMarginBottom = useSharedValue(0);
  const controlsOpacity = useSharedValue(1);
  const topControlMarginTop = useSharedValue(0);

  const animations = {
    bottomControl: useAnimatedStyle(() => {
      return {
        transform: [{ translateY: bottomControlMarginBottom.value }]
      }
    }),
    topControl: useAnimatedStyle(() => {
      return {
        transform: [{ translateY: topControlMarginTop.value }]
      }
    }),


    controlsOpacity: useAnimatedStyle(() => {
      return {
        opacity: controlsOpacity.value,
      }
    }),
  };

  const hideControlAnimation = () => {
    bottomControlMarginBottom.value = withTiming(100, {
      duration: controlAnimationTiming,
    });
    topControlMarginTop.value = withTiming(-100, {
      duration: controlAnimationTiming,
    });
    controlsOpacity.value = withTiming(0, {
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
    controlsOpacity.value = withTiming(1, {
      duration: controlAnimationTiming,
    })


  };



  return {
    animations,
    hideControlAnimation,
    showControlAnimation,
  };
};
