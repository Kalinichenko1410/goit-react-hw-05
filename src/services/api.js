import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFiZTM0NzYxMzk4ZDg2NWZlN2NiZjIxMWYyOTU4MyIsIm5iZiI6MTcyODA2ODgzNi44MDYzODksInN1YiI6IjY3MDAzYmExYjE0NjI4MmY3Yjg1MmJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MPsmjJrakt3jdNGU0t9X-IG2i4GqifRN9LkYkvfFUfk';

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day?language=en-US');
    return data;  
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}?language=en-US`); 
    return data;  
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits?language=en-US`);
    return data;  
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
};


export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews?language=en-US&page=1`);
    return data;  
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'&query=${query}`);
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};