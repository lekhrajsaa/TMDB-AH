import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, StatusBar} from 'react-native';

import {BottomBar, PopularMovies, Search} from '../components';
import colors from '../config/colors';
import {API_KEY} from '../utils/apiKey';
import {getMovies, searchThisMovie} from '../utils/APIs';

const SearchScreen = ({navigation}) => {
  const [bottomBarHeight, setBottomBarHeight] = useState(0);

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const trendingMovies = useSelector(state => state.name.movies);

  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = async () => {
    if (trendingMovies.length) {
      setMovies(trendingMovies);
    } else {
      setLoading(true);
      const response = await axios.get(getMovies);
      setMovies(response.data.results);
      setLoading(false);
    }
  };
  const getSearchedMovie = async () => {
    setLoading(true);
    const response = await axios.get(`${searchThisMovie}${searchMovie}`);
    setMovies(response.data.results);
    setLoading(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Search
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          getSearchedMovie={getSearchedMovie}
        />
        <PopularMovies
          customStyles={styles.popularMovies}
          loading={loading}
          trendingMovies={movies}
          bottomBarHeight={bottomBarHeight}
          navigation={navigation}
          scroll={true}
          back={'Search'}
          refresh={() => {
            getTrendingMovies();
            setSearchMovie('');
          }}
        />
      </View>

      <BottomBar
        customStyles={styles.bottomBar}
        setBottomBarHeight={setBottomBarHeight}
        colorBookmark={colors.notSelected}
        colorSearch={colors.selected}
        onPressBookmark={() => {
          navigation.navigate('Home');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 8,
    zIndex: 1,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingTop: 24,
    paddingHorizontal: 32,
  },
  popularMovies: {
    marginTop: 24,
  },
});

export default SearchScreen;
