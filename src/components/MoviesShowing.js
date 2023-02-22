import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ContentHeader from './ContentHeader';
import Loader from './Loader';
import NowShowingCard from './NowShowingCard';

const MoviesShowing = ({
  loading,
  trendingMovies,
  navigation,
  flatListID,
  headingID,
  cardID,
}) => {
  const renderMovies = items => {
    return (
      <NowShowingCard
        testID={items.original_title}
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
  return (
    <View>
      <ContentHeader
        headingID={headingID}
        cardID={cardID}
        customStyles={styles.headerMovie}
        heading={'Now Showing'}
        cardText="See more"
      />
      {loading ? (
        <Loader style={styles.loader} />
      ) : (
        <FlatList
          testID={flatListID}
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
  );
};

const styles = StyleSheet.create({
  headerMovie: {
    marginTop: 20,
    padding: 8,
    marginHorizontal: 16,
  },
  loader: {
    marginTop: 24,
  },
  nowShowing: {
    marginStart: 16,
    flexGrow: 0,
  },
  nowShowingContainer: {
    paddingEnd: 12,
  },
});

export default MoviesShowing;
