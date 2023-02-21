import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Play} from '../assets/svg';
import colors from '../config/colors';

const PlayTrailer = ({customStyles}) => {
  return (
    <View style={{...styles.playContainer, ...customStyles}}>
      <Play />
      <Text style={styles.play}>Play Trailer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  playContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    marginTop: 4,
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
    fontSize: 12,
    color: colors.white,
  },
});

export default PlayTrailer;
