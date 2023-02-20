import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ContentHeader from './ContentHeader';
import Loader from './Loader';
import PopularCard from './PopularCard';

const PopularMovies = ({
  loading,
  bottomBarHeight,
  trendingMovies,
  navigation,
  customStyles,
}) => {
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
    <View style={{...customStyles}}>
      <ContentHeader
        customStyles={styles.headerMovie}
        heading={'Popular'}
        cardText="See more"
      />

      {loading ? (
        <Loader style={styles.loader} />
      ) : (
        <FlatList
          style={styles.popular}
          contentContainerStyle={{paddingBottom: bottomBarHeight}}
          scrollEnabled={false}
          data={trendingMovies}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderPopular(item)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 24,
  },
  popular: {
    marginTop: 12,
    flexGrow: 0,
  },
});

export default PopularMovies;
