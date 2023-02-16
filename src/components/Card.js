import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

const Card = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  heading: {
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: colors.grey,
  },
});

export default Card;
