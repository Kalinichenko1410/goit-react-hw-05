import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
           <Link to={`/movies/${movie.id}`}>
              <h3>{movie.title} ({new Date(movie.release_date).getFullYear()})</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default MovieList;
