import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import colors from '../config/colors';

const Cast = ({imageSrc, name}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  image: {
    width: 72,
    height: 76,
    borderRadius: 5,
  },
  name: {
    width: 72,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.blueVarient,
  },
});

export default Cast;
