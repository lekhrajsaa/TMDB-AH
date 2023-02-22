import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Menu = ({testID}) => {
  return (
    <TouchableOpacity style={styles.container} testID={testID}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 5.75C11 5.33579 11.3358 5 11.75 5H19.25C19.6642 5 20 5.33579 20 5.75C20 6.16421 19.6642 6.5 19.25 6.5H11.75C11.3358 6.5 11 6.16421 11 5.75ZM4 11.75C4 11.3358 4.33579 11 4.75 11H19.25C19.6642 11 20 11.3358 20 11.75C20 12.1642 19.6642 12.5 19.25 12.5H4.75C4.33579 12.5 4 12.1642 4 11.75ZM4.75 17C4.33579 17 4 17.3358 4 17.75C4 18.1642 4.33579 18.5 4.75 18.5H12.25C12.6642 18.5 13 18.1642 13 17.75C13 17.3358 12.6642 17 12.25 17H4.75Z"
          fill="#110E47"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Menu;
