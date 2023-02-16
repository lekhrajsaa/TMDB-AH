import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import HomePage from './src/screens/HomePage';

const App = props => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=8486292ede627ada9bab70866df20d28`,
    );
    const data = await response.json();
    setRecipes(data.results);
    console.log(data);
  };
  return <HomePage />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
