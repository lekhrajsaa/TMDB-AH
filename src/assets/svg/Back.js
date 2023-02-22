import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Back = ({onPress, testID}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID={testID}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M19.3074 11.3023H6.36462L9.45295 8.19101C9.7235 7.91863 9.7235 7.47676 9.45295 7.20441C9.18239 6.93186 8.74375 6.93186 8.4736 7.20441L4.20292 11.5066C3.93236 11.779 3.93236 12.2209 4.20292 12.4932L8.4736 16.7956C8.60883 16.9319 8.78607 17 8.96327 17C9.14047 17 9.31771 16.9319 9.45295 16.7956C9.7235 16.5232 9.7235 16.0814 9.45295 15.8091L6.36462 12.6976H19.3074C19.6898 12.6976 20 12.3852 20 11.9999C20 11.6146 19.6899 11.3023 19.3074 11.3023Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Back;
