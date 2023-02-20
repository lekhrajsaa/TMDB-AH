import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../config/colors';

const Loader = ({customStyles}) => {
  return (
    <View style={{...styles.activityIndicatorContainer, ...customStyles}}>
      <ActivityIndicator size="large" color={colors.puprle} />
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    alignItems: 'center',
  },
});

export default Loader;
