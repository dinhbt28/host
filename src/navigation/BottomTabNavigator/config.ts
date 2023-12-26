import React from 'react';
import {Federated} from '@callstack/repack/client';
import { Icon } from 'react-native-vector-icons/Icon';

import { Icons } from '@/components/Icon';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';


const AccountScreen = React.lazy(() =>
  Federated.importModule('auth', './AccountScreen'),
);

export type TConfigBottomTab = {
  route: string;
  label: string;
  type: typeof Icon;
  activeIcon: string;
  inActiveIcon: string;
  component: React.FC;
};

const configs: TConfigBottomTab[] = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: HomeScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: AccountScreen,
  },
];

export default configs;
