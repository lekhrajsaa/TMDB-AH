import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import Bookmark from '../assets/svg/Bookmark';
import BookmarkCopy from '../assets/svg/BookmarkCopy';
import BookmarkCopy2 from '../assets/svg/BookmarkCopy2';
import Menu from '../assets/svg/Menu';
import Notification from '../assets/svg/Notification';
import Card from '../components/Card';
import MyStatusBar from '../components/MyStatusBar';
import NowShowingCard from '../components/NowShowingCard';
import colors from '../config/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomePage = props => {
  const movies = [
    {
      id: 1,
      movieName: 'Spiderman: No Way Home',
      movieRating: '9.1',
      moiveImageSrc: require('../assets/images/SpiderMan.png'),
    },
    {
      id: 2,
      movieName: 'Eternals',
      movieRating: '9.5',
      moiveImageSrc: require('../assets/images/SpiderMan.png'),
    },
    {
      id: 3,
      movieName: 'Shang-Chi',
      movieRating: '8.1',
      moiveImageSrc: require('../assets/images/SpiderMan.png'),
    },
  ];

  const renderMovies = items => {
    return (
      <View style={styles.moviesCardContainer}>
        <NowShowingCard
          movieName={items.movieName}
          movieRating={items.movieRating}
          moiveImageSrc={items.moiveImageSrc}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <MyStatusBar color={'transparent'} />
      <View style={styles.leftView} />
      <View style={styles.rightView} />

      <View style={styles.header}>
        <Menu />
        <Text style={styles.heading}>FilmKu</Text>
        <Notification />
      </View>

      <View style={styles.header}>
        <Text style={styles.heading}>Now Showing</Text>
        <Card text={'See more'} />
      </View>

      <FlatList
        style={styles.nowShowing}
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderMovies(item)}
      />

      <View style={styles.bottomBar}>
        <Bookmark />
        <BookmarkCopy />
        <BookmarkCopy2 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftView: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width / 4,
    backgroundColor: colors.primary2,
  },
  rightView: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: height,
    width: (width * 3) / 4,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    marginTop: 40,
    padding: 8,
    justifyContent: 'space-between',
    marginStart: 20,
    marginEnd: 20,
  },
  heading: {
    fontFamily: 'Merriweather-Regular',
    fontWeight: '900',
    fontSize: 16,
    alignSelf: 'center',
    color: colors.blueVarient,
  },
  nowShowing: {
    marginStart: 28,
    marginTop: 8,
    flexGrow: 0,
  },
  moviesCardContainer: {
    marginEnd: 16,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 0.2,
    borderTopColor: colors.lightGrey,
    backgroundColor: colors.white,
    zIndex: 1,
    shadowColor: colors.darkGrey,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
});

export default HomePage;
