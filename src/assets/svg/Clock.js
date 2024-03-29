import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Clock = props => {
  return (
    <View style={styles.container}>
      <Svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 5.5C0 2.8213 2.1793 0.641998 4.858 0.641998C7.5367 0.641998 9.716 2.8213 9.716 5.5C9.716 8.1787 7.5367 10.358 4.858 10.358C2.1793 10.358 0 8.1787 0 5.5ZM1.0336 5.5C1.0336 7.6088 2.7493 9.3243 4.858 9.3243C6.9667 9.3243 8.6824 7.6088 8.6824 5.5C8.6824 3.3912 6.9667 1.6757 4.858 1.6757C2.7493 1.6757 1.0336 3.3912 1.0336 5.5Z"
          fill="black"
        />
        <Path
          d="M6.64531 6.01455H4.70939V3.95572C4.70939 3.78247 4.55057 3.642 4.35469 3.642C4.15881 3.642 4 3.78247 4 3.95572V6.32827C4 6.50153 4.15881 6.642 4.35469 6.642H6.64531C6.84119 6.642 7 6.50153 7 6.32827C7 6.15502 6.84119 6.01455 6.64531 6.01455Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Clock;
