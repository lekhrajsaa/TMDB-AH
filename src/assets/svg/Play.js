import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Play = props => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M22.5 0C10.0738 0 0 10.0736 0 22.5C0 34.9264 10.0738 45 22.5 45C34.9262 45 45 34.9264 45 22.5C45 10.0736 34.9262 0 22.5 0Z"
          fill="white"
        />
        <Path
          d="M30.342 24.1311L19.142 30.7975C18.9154 30.9323 18.6577 31 18.4 31C18.1666 31 17.9328 30.9447 17.7212 30.8327C17.2762 30.5977 17 30.1517 17 29.6667V16.3339C17 15.8489 17.2762 15.4029 17.7212 15.1679C18.1662 14.9316 18.7104 14.9459 19.142 15.2031L30.342 21.8695C30.7512 22.1137 31 22.5407 31 23.0003C31 23.4599 30.7512 23.887 30.342 24.1311Z"
          fill="#110E47"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Play;
