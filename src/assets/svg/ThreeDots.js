import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ThreeDots = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.00004 14C2.89722 14 2 13.1029 2 12C2 10.8972 2.89722 10 4.00004 10C5.10285 10 6 10.8972 6 12C6 13.1029 5.10285 14 4.00004 14ZM12 14C10.8972 14 10 13.1029 10 12C10 10.8972 10.8972 10 12 10C13.1029 10 14 10.8972 14 12C14 13.1029 13.1029 14 12 14ZM18 12C18 13.1029 18.8972 14 20 14C21.1029 14 22 13.1029 22 12C22 10.8972 21.1029 10 20 10C18.8972 10 18 10.8972 18 12Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ThreeDots;
