import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

const MovieDescription = ({customStyles, type, description, testID}) => {
  return (
    <View style={{...customStyles}} testID={testID}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.detail}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  type: {
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.varientGrey,
  },
  detail: {
    fontFamily: 'Mulish-SemiBold',
    //fontWeight: '600',
    fontSize: 12,
    color: colors.black,
  },
});

export default MovieDescription;
