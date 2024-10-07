import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";
import s from "./HomePage.module.css";
const HomePage = () => {
  const [movies, setMovies] = useState([]);  

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies(); 
        setMovies(data.results);  
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={s.wrapper}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />  
    </div>
  );
};

export default HomePage;
