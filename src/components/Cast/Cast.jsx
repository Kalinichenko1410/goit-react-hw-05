// src/components/Cast.jsx

import { useEffect, useState } from 'react';
import { fetchMovieCredits } from "../../services/api"; 
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();  
  const [movieCredits, setMovieCredits] = useState(null); 

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const credits = await fetchMovieCredits(movieId);
        setMovieCredits(credits); 
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  if (!movieCredits) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {movieCredits.cast.length > 0 ? (
          movieCredits.cast.map(actor => (
            <li key={actor.id}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                alt={actor.name} 
                width="100" 
              />
              <p><strong>{actor.name}</strong> as {actor.character}</p>
            </li>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </ul>
    </div>
  );
};

export default Cast;
