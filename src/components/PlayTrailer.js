import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Play} from '../assets/svg';
import colors from '../config/colors';

const PlayTrailer = ({customStyles, testID, textID}) => {
  return (
    <View style={{...styles.playContainer, ...customStyles}}>
      <Play testID={testID} />
      <Text style={styles.play} testID={textID}>
        Play Trailer
      </Text>
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
