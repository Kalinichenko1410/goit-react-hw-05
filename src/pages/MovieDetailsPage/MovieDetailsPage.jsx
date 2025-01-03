import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetails } from "../../services/api"; 
import {  Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import s from "./MovieDetails.module.css";
const MovieDetailsPage = () => {
  const { movieId } = useParams();  

  
  
 
  const [movieDetails, setMovieDetails] = useState(null); 
  const location = useLocation();
  console.log(location);
  const goBackRef = useRef(location.state)
   

  const userScore = Math.round(movieDetails?.vote_average * 10); 

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const details = await fetchMovieDetails(movieId); 
        setMovieDetails(details); 
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    getMovieData();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>; 
  }

  const releaseYear = new Date(movieDetails.release_date).getFullYear();
  const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`; 



  return (
  
    <div className={s.wrapper}>
      <Link className={s.goBack} to={goBackRef.current ?? "/"}>← Go back</Link>

    <div className={s.movieCard}>
      <img className={s.poster} src={posterUrl} alt={`${movieDetails.title} poster`} width="300" /> 
      <div className={s.info}>
        <ul>
          <li>
            <h2>{movieDetails.title} ({releaseYear})</h2> 
          </li>
          <li>
            <p>User Score: {userScore}%</p> 
          </li>
          <li>
            <h3>Overview:</h3> 
            <p>{movieDetails.overview || 'No overview available.'}</p> 
          </li>
           <li>
            
                <h3>Genres:</h3>
      {movieDetails.genres.length > 0 ? (
        <ul>
          {movieDetails.genres.map(genre => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No genres available.</p>
        )}
            </li>
            
          </ul>
          
        </div>
        
      </div>
      


      <hr />     
      

      <div>
        <ul>
          <li>
            <NavLink to='cast'>
              <p>Cast</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='reviews'>
              <p>Reviews</p>
            </NavLink>
          </li>
        </ul>
        <hr />
        <Outlet /> 
      </div>
    </div>
  );
};

export default MovieDetailsPage;
