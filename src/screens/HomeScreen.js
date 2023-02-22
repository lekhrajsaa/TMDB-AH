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
import {setMovies} from '../store/movieSlice';
import {getMovies} from '../utils/APIs';

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
    const response = await axios.get(getMovies);
    setTrendingMovies(response.data.results);
    dispatch(setMovies({movie: response.data.results}));
    setLoading(false);
    // console.log('MOVIES', response.data.results);
  };

  return (
    <View style={styles.container} testID="HomeScreen">
      <MyStatusBar color={'transparent'} />
      <View style={styles.leftView} testID="LeftView" />
      <View style={styles.rightView} testID="RightView" />

      <PageHeader
        headingID={'FilmKu'}
        customStyles={styles.header}
        heading={'FilmKu'}
        iconLeft={<Menu testID={'Menu'} />}
        iconRight={<Notification testID={'Notification'} />}
      />

      <ScrollView showsVerticalScrollIndicator={false} testID="Popular_Movies">
        <MoviesShowing
          headingID={'NowShowing'}
          cardID={'NowShowingCard'}
          flatListID={'NowShowingFlatList'}
          loading={loading}
          trendingMovies={trendingMovies}
          navigation={navigation}
        />
        <PopularMovies
          testID={'Home'}
          headingID={'Popular'}
          cardID={'PopularCard'}
          flatListID={'PopularFlatList'}
          customStyles={styles.popularMovies}
          loading={loading}
          trendingMovies={trendingMovies}
          bottomBarHeight={bottomBarHeight}
          navigation={navigation}
          scroll={false}
          back={'Home'}
        />
      </ScrollView>
      <BottomBar
        testID="BottomBar"
        testIDBookmark="HomeScreenIcon"
        testIDSearch="SearchScreenIcon"
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
