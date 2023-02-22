import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

const PageHeader = ({
  customStyles,
  heading,
  iconLeft,
  iconRight,
  headingID,
}) => {
  return (
    <View style={{...styles.header, ...customStyles}}>
      {iconLeft}
      <Text style={styles.heading} testID={headingID}>
        {heading}
      </Text>
      {iconRight}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  heading: {
    fontFamily: 'Merriweather-Black',
    //fontWeight: '900',
    fontSize: 16,
    color: colors.blueVarient,
  },
});

export default PageHeader;
