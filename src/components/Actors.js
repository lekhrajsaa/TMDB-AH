import React from 'react';
import {StyleSheet, View} from 'react-native';
import Cast from './Cast';

const Actors = ({allActors}) => {
  return (
    <View style={styles.castContainer}>
      {allActors.map((data, index) => (
        <Cast key={index} name={data.name} imageSrc={data.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  castContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Actors;
