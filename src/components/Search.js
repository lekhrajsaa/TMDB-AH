import React from 'react';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import colors from '../config/colors';
import {SearchBar} from '../assets/svg';

const Search = ({searchMovie, setSearchMovie, getSearchedMovie}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        value={searchMovie}
        placeholder="Search movie"
        placeholderTextColor={colors.grey}
        onChangeText={movie => {
          setSearchMovie(movie);
        }}
        onEndEditing={() => {
          getSearchedMovie();
          Keyboard.dismiss();
        }}
      />
      <SearchBar
        customStyles={styles.searchIcon}
        onPress={() => {
          getSearchedMovie();
          Keyboard.dismiss();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
  searchInput: {
    width: '90%',
    padding: 6,
    color: colors.black,
    paddingHorizontal: 16,
  },
});

export default Search;
