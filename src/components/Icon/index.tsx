import React from 'react';
import { Icon } from 'react-native-vector-icons/Icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { StyleProp, ViewStyle } from 'react-native';

export const Icons = {
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  AntDesign,
  Entypo,
  Foundation,
  EvilIcons,
};

type IconProps = {
  type: typeof Icon;
  name: string;
  color: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const IconApp = ({ type, name, color, size = 24, style }: IconProps) => {
  const Tag: any = type;
  return (
    <>
      {type && name && (
        <Tag name={name} size={size} color={color} style={style} />
      )}
    </>
  );
};

export default IconApp;
