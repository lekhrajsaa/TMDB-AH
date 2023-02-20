import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Bookmark, BookmarkCopy2, Search} from '../assets/svg';
import colors from '../config/colors';

const BottomBar = ({
  customStyles,
  setBottomBarHeight,
  onPressBookmark,
  onPressSearch,
  onPressBookmark2,
  colorBookmark,
  colorSearch,
  colorBookmark2,
}) => {
  return (
    <View
      onLayout={({
        nativeEvent: {
          layout: {height},
        },
      }) => {
        setBottomBarHeight(height);
      }}
      style={{...styles.bottomBar, ...customStyles}}>
      <Bookmark onPress={onPressBookmark} color={colorBookmark} />
      <Search onPress={onPressSearch} color={colorSearch} />
      <BookmarkCopy2 onPress={onPressBookmark2} color={colorBookmark2} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
});

export default BottomBar;
