import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const BookmarkCopy2 = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.1002 2.11908C19.375 2.23363 19.5939 2.41419 19.7564 2.66111C19.9187 2.90789 20 3.18096 20 3.48065V20.5195C20 20.8192 19.9188 21.0923 19.7564 21.3389C19.5938 21.586 19.3749 21.7667 19.1002 21.8811C18.9418 21.9517 18.7584 21.9867 18.55 21.9867C18.1502 21.9867 17.8043 21.8456 17.5126 21.5641L12 15.9589L6.48747 21.564C6.18739 21.8545 5.84173 22 5.44992 22C5.25829 22 5.07489 21.9604 4.90002 21.8812C4.62507 21.7668 4.40625 21.586 4.24378 21.3393C4.08135 21.0923 4 20.8193 4 20.5195V3.48047C4 3.18077 4.08135 2.9077 4.24378 2.66092C4.40625 2.41415 4.62507 2.23335 4.90002 2.1189C5.07506 2.03968 5.25829 2 5.44992 2H18.5501V2.00019C18.7418 2.00019 18.9252 2.03986 19.1002 2.11908ZM13.1126 14.7427L18.4001 20.1095V3.6922H5.60016V20.1095L10.8876 14.7427L12.0001 13.6193L13.1126 14.7427Z"
          fill="#BCBCCD"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BookmarkCopy2;
