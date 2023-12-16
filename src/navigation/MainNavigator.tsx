import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

export type MainStackParamList = {
  Profile: undefined;
  Home: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Profile" component={ProfileScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
