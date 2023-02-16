import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Menu from '../assets/svg/Menu';
import Notification from '../assets/svg/Notification';
import Card from '../components/Card';
import MyStatusBar from '../components/MyStatusBar';
import NowShowingCard from '../components/NowShowingCard';
import colors from '../config/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomePage = props => {
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

      <View style={{marginStart: 20, flexDirection: 'row'}}>
        <NowShowingCard
          movieName={'Spiderman: No Way Home'}
          movieRating={'9.1'}
          moiveImageSrc={require('../assets/images/SpiderMan.png')}
        />
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
    backgroundColor: colors.primary1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 40,
    padding: 8,
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginEnd: 28,
  },
  heading: {
    fontFamily: 'Merriweather-Regular',
    fontWeight: '900',
    fontSize: 16,
    alignSelf: 'center',
    color: colors.blueVarient,
  },
});

export default HomePage;
