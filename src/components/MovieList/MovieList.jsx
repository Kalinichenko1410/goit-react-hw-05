import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.results); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getAllMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {movies.map(movie => ( 
          <li key={movie.id}>
            <Link to={movie.id}> 
            <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
