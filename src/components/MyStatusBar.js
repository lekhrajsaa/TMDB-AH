import React from 'react';
import {StatusBar, View} from 'react-native';

export default function MyStatusBar({color}) {
  return (
    <StatusBar translucent backgroundColor={color} barStyle="dark-content" />
  );
}
