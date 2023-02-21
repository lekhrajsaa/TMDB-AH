import {API_KEY} from './apiKey';

export const getMovies = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

export const searchThisMovie = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
