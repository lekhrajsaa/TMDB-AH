import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Star} from '../assets/svg';
import colors from '../config/colors';

const Rating = ({rating}) => {
  return (
    <View style={styles.ratingContainer}>
      <Star />
      <Text style={styles.rating}>{`${rating}/10 IMDb`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    marginStart: 4,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.varientGrey,
  },
  ratingContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rating;
