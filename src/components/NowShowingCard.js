import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Star} from '../assets/svg';
import colors from '../config/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const NowShowingCard = ({movieName, moiveImageSrc, movieRating, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{uri: moiveImageSrc}} style={styles.image} />
      </View>

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
    marginHorizontal: 8,
    marginTop: 8,
  },
  image: {
    height: height / 3.4,
    width: width / 2.7,
    borderRadius: 5,
  },
  imageContainer: {
    height: height / 3.4,
    width: width / 2.7,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    backgroundColor: colors.white,
    elevation: 10,
  },
  movieName: {
    width: 140,
    marginTop: 12,
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
    fontSize: 14,
    color: colors.black,
  },
  rating: {
    marginStart: 4,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
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
