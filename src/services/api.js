import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFiZTM0NzYxMzk4ZDg2NWZlN2NiZjIxMWYyOTU4MyIsIm5iZiI6MTcyODA2ODgzNi44MDYzODksInN1YiI6IjY3MDAzYmExYjE0NjI4MmY3Yjg1MmJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MPsmjJrakt3jdNGU0t9X-IG2i4GqifRN9LkYkvfFUfk';

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day?language=en-US');
    return data;  
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
