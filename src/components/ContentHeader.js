import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import Card from './Card';

const ContentHeader = ({customStyles, heading, cardText}) => {
  return (
    <View style={{...styles.headerMovie, ...customStyles}}>
      <Text style={styles.heading}>{heading}</Text>
      <Card text={cardText} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerMovie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Merriweather-Black',
    //fontWeight: '900',
    fontSize: 16,
    color: colors.blueVarient,
  },
});

export default ContentHeader;
