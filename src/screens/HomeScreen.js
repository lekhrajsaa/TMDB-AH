import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Notification,
  Bookmark,
  BookmarkCopy2,
  Menu,
  Search,
} from '../assets/svg';
import {Card, MyStatusBar, NowShowingCard, PopularCard} from '../components';
import colors from '../config/colors';
import {API_KEY} from '../utils/apiKey';
import {setMovies} from '../store/movieSlice';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const HomeScreen = ({navigation}) => {
  const [bottomBarHeight, setBottomBarHeight] = useState(0);

  const [loading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies();
    // getMovie();
  }, []);
  const getTrendingMovies = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
    );
    setTrendingMovies(response.data.results);
    dispatch(setMovies({movie: response.data.results}));
    console.log('MOVIES', response.data.results);
    setLoading(false);
  };
  // const getMovie = async () => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/505642?api_key=${API_KEY}`,
  //   );
  //   console.log('PARTICULAR_MOVIE : ', response.data);
  // };
  const renderMovies = items => {
    return (
      <NowShowingCard
        movieName={items.original_title}
        movieRating={items.vote_average}
        moiveImageSrc={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
        onPress={() => {
          navigation.navigate('Description', {
            title: items.original_title,
            rating: items.vote_average,
            poster: items.backdrop_path,
            description: items.overview,
            language: items.original_language,
            back: 'Home',
          });
        }}
      />
    );
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
            back: 'Home',
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <MyStatusBar color={'transparent'} />
      <View style={styles.leftView} />
      <View style={styles.rightView} />

      <View style={styles.header}>
        <Menu />
        <Text style={styles.heading} testID="text">
          FilmKu
        </Text>
        <Notification />
      </View>

      <View>
        <View style={styles.headerMovie}>
          <Text style={styles.heading}>Now Showing</Text>
          <Card text={'See more'} />
        </View>

        {loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color={colors.puprle} />
          </View>
        ) : (
          <FlatList
            style={styles.nowShowing}
            contentContainerStyle={styles.nowShowingContainer}
            data={trendingMovies}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => renderMovies(item)}
          />
        )}
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
          data={trendingMovies}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderPopular(item)}
        />
      )}
      <View
        onLayout={({
          nativeEvent: {
            layout: {height},
          },
        }) => {
          setBottomBarHeight(height);
        }}
        style={styles.bottomBar}>
        <Bookmark color={colors.selected} />
        <Search
          onPress={() => {
            navigation.navigate('Search');
          }}
          color={colors.notSelected}
        />
        <BookmarkCopy2 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    marginTop: 24,
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
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  headerMovie: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 16,
    padding: 8,
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Merriweather-Black',
    //fontWeight: '900',
    fontSize: 16,
    alignSelf: 'center',
    color: colors.blueVarient,
  },
  leftView: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width / 4,
    backgroundColor: colors.primary2,
  },
  nowShowing: {
    marginStart: 16,
    flexGrow: 0,
  },
  nowShowingContainer: {
    paddingEnd: 12,
  },
  popular: {
    marginStart: 24,
    marginTop: 8,
    flexGrow: 0,
  },
  rightView: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: height,
    width: (width * 3) / 4,
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
