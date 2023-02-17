import React from 'react';
import {StatusBar, View} from 'react-native';

export default function MyStatusBar({color, barstyle}) {
  return (
    <StatusBar
      translucent
      backgroundColor={color}
      barStyle={barstyle ? 'light-content' : 'dark-content'}
    />
  );
}
