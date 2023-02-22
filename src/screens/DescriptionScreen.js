import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Back, BookmarkCopy3, ThreeDots} from '../assets/svg';
import {
  Actors,
  Card,
  Cast,
  ContentHeader,
  MovieDescription,
  MovieType,
  MyStatusBar,
  PageHeader,
  PlayTrailer,
  Rating,
} from '../components';
import colors from '../config/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const DescriptionScreen = ({navigation, route}) => {
  const {title, rating, poster, description, language, back} = route.params;
  const allLanguages = {
    en: 'English',
    ja: 'Japanese',
    es: 'Spanish',
    ab: 'English',
  };
  const movieTypes = [
    {
      name: 'ACTION',
      varient: 'Secondary',
    },
    {
      name: 'ADVENTURE',
      varient: 'Secondary',
    },
    {
      name: 'FANTASY',
      varient: 'Secondary',
    },
  ];
  const allActors = [
    {
      name: 'Tom Holland',
      image: require('../assets/images/Tom.png'),
    },
    {
      name: 'Zendaya',
      image: require('../assets/images/Zendaya.png'),
    },
    {
      name: 'Benedict Cumberbatch',
      image: require('../assets/images/Benedict.png'),
    },
    {
      name: 'Jacon Batalon',
      image: require('../assets/images/Jacon.png'),
    },
  ];

  return (
    <ScrollView
      testID="DescriptionScreen"
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={false}>
      <MyStatusBar color={'transparent'} barstyle={true} />

      <Image
        testID="BackgroundImage"
        source={{uri: `https://image.tmdb.org/t/p/w500${poster}`}}
        style={styles.image}
      />

      <PageHeader
        customStyles={styles.header}
        iconLeft={
          <Back
            testID="GoBack"
            onPress={() => {
              navigation.navigate(`${back}`);
            }}
          />
        }
        iconRight={<ThreeDots testID="ThreeDots" />}
      />

      <PlayTrailer
        customStyles={styles.playContainer}
        testID="PlayTrailerBtn"
        textID="PlayTrailerText"
      />

      <View style={styles.innerContainer}>
        <View style={styles.movieNameContainer}>
          <Text style={styles.movieName} testID={'MovieName'}>
            {title}
          </Text>
          <BookmarkCopy3 testID={'BookmarkCopy3'} />
        </View>

        <Rating testID={'Rating'} rating={rating} />

        <MovieType
          testID={'MovieTypes'}
          types={movieTypes}
          customStyles={styles.movieType}
        />

        <View style={styles.movieDetails}>
          <MovieDescription
            testID={'Length'}
            type={'Length'}
            description={'2h 28min'}
          />
          <MovieDescription
            testID={'Language'}
            customStyles={styles.language}
            type={'Language'}
            description={allLanguages[language]}
          />
          <MovieDescription
            testID={'RatingDescription'}
            customStyles={styles.rating2}
            type={'Rating'}
            description={'PG-13'}
          />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.heading} testID={'HeadingDescription'}>
            Description
          </Text>
          <ScrollView
            testID="Description"
            style={styles.scrollViewDescription}
            nestedScrollEnabled={true}>
            <Text style={styles.description}>{description}</Text>
          </ScrollView>
        </View>

        <ContentHeader
          headingID={'Cast'}
          cardID={'DescriptionScreenSeemore'}
          customStyles={styles.castHeaderContainer}
          heading={'Cast'}
          cardText="See more"
        />
        <Actors testID={'Actors'} allActors={allActors} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  castHeaderContainer: {
    marginTop: 24,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  description: {
    marginEnd: 24,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: colors.varientGrey,
  },
  descriptionContainer: {
    marginTop: 24,
  },
  detail: {
    fontFamily: 'Mulish-SemiBold',
    //fontWeight: '600',
    fontSize: 12,
    color: colors.black,
  },
  heading: {
    fontFamily: 'Merriweather-Black',
    //fontWeight: '900',
    fontSize: 16,
    color: colors.blueVarient,
  },
  header: {
    marginTop: StatusBar.currentHeight + 22,
    marginHorizontal: 16,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height / 2.7,
  },
  innerContainer: {
    marginTop: height / 2.7 - (StatusBar.currentHeight + 185),
    padding: 24,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  language: {
    marginStart: 60,
  },
  movieDetails: {
    flexDirection: 'row',
    marginTop: 16,
  },
  movieName: {
    width: width / 2,
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
    fontSize: 20,
    color: colors.black,
  },
  movieNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieType: {
    marginTop: 20,
  },
  playContainer: {
    marginTop: 50,
  },
  rating: {
    marginStart: 4,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.varientGrey,
  },
  rating2: {
    marginStart: 60,
  },
  ratingContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollViewDescription: {
    marginTop: 8,
    height: height / 7,
  },
  type: {
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.varientGrey,
  },
});

export default DescriptionScreen;
