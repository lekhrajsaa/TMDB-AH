import React from 'react';
import {StatusBar, View} from 'react-native';

export default function MyStatusBar({color}) {
  return (
    <View>
      <StatusBar translucent backgroundColor={color} barStyle="dark-content" />
    </View>
  );
}
