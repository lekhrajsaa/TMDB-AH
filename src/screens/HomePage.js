import React, {useState} from 'react';
import {
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
  BookmarkCopy,
  BookmarkCopy2,
  Menu,
} from '../assets/svg';
import {Card, MyStatusBar, NowShowingCard, PopularCard} from '../components';
import colors from '../config/colors';
import {vs} from '../utils/scalingUtils';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const HomePage = props => {
  const [bottomBarHeight, setBottomBarHeight] = useState(0);
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
  const popular = [
    {
      id: 1,
      movieImageSrc: require('../assets/images/Venom.png'),
      movieName: 'Venom Let There Be Carnage',
      movieRating: '6.4',
      movieDuration: '1h 47m',
      movieType: ['HORROR', 'MYSTERY', 'THRILLER'],
    },
    {
      id: 2,
      movieImageSrc: require('../assets/images/Venom.png'),
      movieName: 'The King’s Man',
      movieRating: '8.4',
      movieDuration: '1h 47m',
      movieType: ['ACTION', 'FANTASY'],
    },
  ];

  const renderMovies = items => {
    return (
      <NowShowingCard
        movieName={items.movieName}
        movieRating={items.movieRating}
        moiveImageSrc={items.moiveImageSrc}
      />
    );
  };
  const renderPopular = items => {
    return (
      <PopularCard
        movieImageSrc={items.movieImageSrc}
        movieName={items.movieName}
        movieRating={items.movieRating}
        movieDuration={items.movieDuration}
        movieType={items.movieType}
      />
    );
  };
  return (
    <View style={styles.container} nestedScrollEnabled={true}>
      <MyStatusBar color={'transparent'} />
      <View style={styles.leftView} />
      <View style={styles.rightView} />

      <View style={styles.header}>
        <Menu />
        <Text style={styles.heading}>FilmKu</Text>
        <Notification />
      </View>

      <View>
        <View style={styles.headerMovie}>
          <Text style={styles.heading}>Now Showing</Text>
          <Card text={'See more'} />
        </View>

        <FlatList
          style={styles.nowShowing}
          contentContainerStyle={styles.nowShowingContainer}
          data={movies}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderMovies(item)}
        />
      </View>

      <View style={styles.headerMovie}>
        <Text style={styles.heading}>Popular</Text>
        <Card text={'See more'} />
      </View>

      <FlatList
        style={styles.popular}
        contentContainerStyle={{paddingBottom: bottomBarHeight}}
        data={popular}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderPopular(item)}
      />
      <View
        onLayout={({
          nativeEvent: {
            layout: {height},
          },
        }) => {
          setBottomBarHeight(height);
        }}
        style={styles.bottomBar}>
        <Bookmark />
        <BookmarkCopy />
        <BookmarkCopy2 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingTop: StatusBar.currentHeight,
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
    fontFamily: 'Merriweather-Regular',
    fontWeight: '900',
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
    marginStart: 24,
    marginTop: 8,
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

export default HomePage;
