import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  
  return (
    
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
           <Link to={`/movies/${movie.id}`} state={location} >
              <h3>{movie.title} ({new Date(movie.release_date).getFullYear()})</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default MovieList;
