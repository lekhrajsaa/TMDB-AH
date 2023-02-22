import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Card';

const MovieType = ({types, customStyles, testID}) => {
  return (
    <View style={{...styles.movieType, ...customStyles}} testID={testID}>
      {types.map((data, index) => (
        <Card key={index} text={data.name} varient={data.varient} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  movieType: {
    flexDirection: 'row',
  },
});

export default MovieType;
