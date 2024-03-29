import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Star = props => {
  return (
    <View style={styles.container}>
      <Svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 9.5L2.47329 11.3541L3.14683 7.42705L0.293661 4.6459L4.23664 4.07295L6 0.5L7.76336 4.07295L11.7063 4.6459L8.85317 7.42705L9.52671 11.3541L6 9.5Z"
          fill="#FFC319"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Star;
