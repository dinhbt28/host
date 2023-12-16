import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '@screens/Profile';
import { NavBar } from '@/components';

export type ProfileStackParamList = {
  Profile: undefined;
};

const Profoile = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <Profoile.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Profoile.Screen name="Profile" component={ProfileScreen} />
    </Profoile.Navigator>
  );
};

export default ProfileNavigator;
