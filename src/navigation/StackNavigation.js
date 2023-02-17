import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DescriptionScreen, HomeScreen, SearchScreen} from '../screens';

const Stack = createStackNavigator();

const StackNavigation = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Description" component={DescriptionScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
