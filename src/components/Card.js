import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const Card = ({text, varient, cardID}) => {
  return (
    <TouchableOpacity
      testID={cardID}
      activeOpacity={varient === 'Secondary' ? 1 : 0.5}
      style={{
        ...styles.container,
        backgroundColor: varient === 'Secondary' ? colors.lightBlue : '',
        paddingVertical: varient === 'Secondary' ? 1 : 4,
        borderColor:
          varient === 'Secondary' ? colors.lightBlue : colors.lightGrey,
        marginEnd: varient === 'Secondary' ? 4 : 0,
      }}>
      <Text
        style={{
          ...styles.heading,
          color: varient === 'Secondary' ? colors.puprle : colors.grey,
          fontSize: varient === 'Secondary' ? 7 : 10,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
  },
  heading: {
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    lineHeight: 12,
  },
});

export default Card;
