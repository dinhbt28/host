import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

export type MainStackParamList = {
  BottomTab: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
      <Main.Screen name="BottomTab" component={BottomTabNavigator} />
    </Main.Navigator>
  );
};

export default MainNavigator;
