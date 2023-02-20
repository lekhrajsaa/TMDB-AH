import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Notification, Menu} from '../assets/svg';
import {
  BottomBar,
  MoviesShowing,
  MyStatusBar,
  PageHeader,
  PopularMovies,
} from '../components';
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
  }, []);
  const getTrendingMovies = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
    );
    setTrendingMovies(response.data.results);
    dispatch(setMovies({movie: response.data.results}));
    // console.log('MOVIES', response.data.results);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <MyStatusBar color={'transparent'} />
      <View style={styles.leftView} />
      <View style={styles.rightView} />

      <PageHeader
        customStyles={styles.header}
        heading={'FilmKu'}
        iconLeft={<Menu />}
        iconRight={<Notification />}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MoviesShowing
          loading={loading}
          trendingMovies={trendingMovies}
          navigation={navigation}
        />
        <PopularMovies
          customStyles={styles.popularMovies}
          loading={loading}
          trendingMovies={trendingMovies}
          bottomBarHeight={bottomBarHeight}
          navigation={navigation}
        />
      </ScrollView>
      <BottomBar
        customStyles={styles.bottomBar}
        setBottomBarHeight={setBottomBarHeight}
        colorBookmark={colors.selected}
        colorSearch={colors.notSelected}
        onPressSearch={() => {
          navigation.navigate('Search');
        }}
      />
    </View>
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
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: colors.white,
  },
  header: {
    marginHorizontal: 16,
  },
  leftView: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width / 3,
    backgroundColor: colors.primary2,
  },
  popularMovies: {
    marginTop: 20,
    marginHorizontal: 24,
  },
  rightView: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: height,
    width: (width * 2) / 3,
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
