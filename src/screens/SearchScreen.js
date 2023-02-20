import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
} from 'react-native';
import {Bookmark, BookmarkCopy2, Search, SearchBar} from '../assets/svg';
import {Card, PopularCard} from '../components';
import colors from '../config/colors';
import {API_KEY} from '../utils/apiKey';

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
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
      );
      setMovies(response.data.results);
      setLoading(false);
    }
  };
  const getSearchedMovie = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovie}`,
    );
    setMovies(response.data.results);
    setLoading(false);
  };

  const renderPopular = items => {
    return (
      <PopularCard
        movieImageSrc={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
        movieName={items.original_title}
        movieRating={items.vote_average}
        movieDuration={'1h 47m'}
        movieType={['HORROR', 'MYSTERY', 'THRILLER']}
        onPress={() => {
          navigation.navigate('Description', {
            title: items.original_title,
            rating: items.vote_average,
            poster: items.backdrop_path,
            description: items.overview,
            language: items.original_language,
            back: 'Search',
          });
        }}
      />
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
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

        <View style={styles.headerMovie}>
          <Text style={styles.heading}>Popular</Text>
          <Card text={'See more'} />
        </View>

        {loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color={colors.puprle} />
          </View>
        ) : (
          <FlatList
            style={styles.popular}
            contentContainerStyle={{paddingBottom: bottomBarHeight}}
            data={movies}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            onRefresh={() => {
              getTrendingMovies();
            }}
            refreshing={loading}
            renderItem={({item}) => renderPopular(item)}
          />
        )}
      </View>
      <View
        onLayout={({
          nativeEvent: {
            layout: {height},
          },
        }) => {
          setBottomBarHeight(height);
        }}
        style={styles.bottomBar}>
        <Bookmark
          onPress={() => {
            navigation.navigate('Home');
          }}
          color={colors.notSelected}
        />
        <Search color={colors.selected} />
        <BookmarkCopy2 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    paddingVertical: 8,
    justifyContent: 'space-between',
    zIndex: 1,
    // shadowColor: colors.darkGrey,
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 20,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingTop: 24,
    paddingHorizontal: 32,
  },
  headerMovie: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Merriweather-Black',
    //fontWeight: '900',
    fontSize: 16,
    color: colors.blueVarient,
  },
  popular: {
    marginTop: 8,
    flexGrow: 0,
  },
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

export default SearchScreen;
