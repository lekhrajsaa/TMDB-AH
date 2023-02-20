import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Clock, Star} from '../assets/svg';
import colors from '../config/colors';
import Card from './Card';

const PopularCard = ({
  movieImageSrc,
  movieName,
  movieRating,
  movieDuration,
  movieType,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={{uri: movieImageSrc}} style={styles.image} />

      <View style={styles.movieDescription}>
        <Text style={styles.movieName}>{movieName}</Text>

        <View style={styles.ratingContainer}>
          <Star />
          <Text style={styles.rating}>{`${movieRating}/10 IMDb`}</Text>
        </View>

        <View style={styles.movieType}>
          {movieType.map((type, index) => (
            <Card key={index} text={type} varient={'Secondary'} />
          ))}
        </View>

        <View style={styles.durationContainer}>
          <Clock />
          <Text style={styles.duration}>{movieDuration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  duration: {
    marginStart: 4,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.black,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  image: {
    borderRadius: 5,
    width: 85,
    height: 120,
  },
  movieDescription: {
    marginStart: 14,
  },
  movieName: {
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
    fontSize: 14,
    width: 120,
    color: colors.black,
  },
  movieType: {
    flexDirection: 'row',
    marginTop: 8,
  },
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

export default PopularCard;
