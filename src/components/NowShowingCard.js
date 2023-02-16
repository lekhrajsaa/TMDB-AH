import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Star from '../assets/svg/Star';
import colors from '../config/colors';

const NowShowingCard = ({movieName, moiveImageSrc, movieRating}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={moiveImageSrc} />
      </View>
      <Text style={styles.movieName}>{movieName}</Text>
      <View style={styles.ratingContainer}>
        <Star />
        <Text style={styles.rating}>{`${movieRating}/10 IMDb`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 143,
  },
  ratingContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieName: {
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
  image: {
    overflow: 'hidden',
    borderRadius: 5,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
  },
});

export default NowShowingCard;
