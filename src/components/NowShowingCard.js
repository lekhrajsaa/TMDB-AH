import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Star} from '../assets/svg';
import colors from '../config/colors';

const NowShowingCard = ({movieName, moiveImageSrc, movieRating, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={{uri: moiveImageSrc}} style={styles.image} />

      <Text style={styles.movieName}>{movieName}</Text>
      <View style={styles.ratingContainer}>
        <Star />
        <Text style={styles.rating}>{`${movieRating}/10 IMDb`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginEnd: 16,
  },
  image: {
    height: 210,
    width: 140,
    borderRadius: 5,
  },
  movieName: {
    width: 140,
    marginTop: 12,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    fontSize: 14,
    color: colors.black,
  },
  rating: {
    marginStart: 4,
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    fontSize: 12,
    alignSelf: 'center',
    color: colors.varientGrey,
  },
  ratingContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NowShowingCard;
