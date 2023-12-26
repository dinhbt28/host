import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import Icon from '@/components/Icon';

import styles from './styles';
import type { TConfigBottomTab } from './config';

type TabBarProps = {
  item: TConfigBottomTab;
};

const TabBar: React.FC<TabBarProps & BottomTabBarButtonProps> = props => {
  const { item, onPress } = props;
  const animationValueIcon = useSharedValue(0);
  const focused = props.accessibilityState?.selected;

  useEffect(() => {
    animationValueIcon.value = withTiming(focused ? 1 : 0);
  }, [focused]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animationValueIcon.value,
          [0, 1],
          [0.7, 1],
          Extrapolation.CLAMP,
        ),
      },
      {
        rotate: `${interpolate(
          animationValueIcon.value,
          [0, 1],
          [0, 360],
          Extrapolation.CLAMP,
        )}deg`,
      },
    ],
  }));

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animated.View style={animatedStyles}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.primary : Colors.primaryLite}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabBar;
