import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const BookmarkCopy3 = ({testID}) => {
  return (
    <View style={styles.container} testID={testID}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.2127 4.09527C18.4531 4.1869 18.6446 4.33136 18.7869 4.52889C18.9289 4.72631 19 4.94477 19 5.18452V18.8156C19 19.0554 18.929 19.2738 18.7868 19.4712C18.6446 19.6688 18.4531 19.8134 18.2126 19.9049C18.0741 19.9613 17.9136 19.9893 17.7313 19.9893C17.3814 19.9893 17.0788 19.8765 16.8235 19.6513L12 15.1671L7.17653 19.6512C6.91396 19.8836 6.61151 20 6.26868 20C6.101 20 5.94053 19.9683 5.78752 19.905C5.54694 19.8134 5.35547 19.6688 5.21331 19.4714C5.07118 19.2738 5 19.0555 5 18.8156V5.18438C5 4.94462 5.07118 4.72616 5.21331 4.52874C5.35547 4.33132 5.54694 4.18668 5.78752 4.09512C5.94068 4.03174 6.101 4 6.26868 4H17.7313V4.00015C17.8991 4.00015 18.0595 4.03189 18.2127 4.09527ZM12.9735 14.1942L17.6001 18.4876V5.35377H6.40015V18.4876L11.0267 14.1942L12.0001 13.2954L12.9735 14.1942Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BookmarkCopy3;
