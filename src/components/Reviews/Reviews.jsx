// src/components/Reviews.jsx

import { useEffect, useState } from 'react';
import { fetchMovieReviews } from "../../services/api"; 
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();  
  const [movieReviews, setMovieReviews] = useState(null); 

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setMovieReviews(reviews); 
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  if (!movieReviews) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {movieReviews.results.length > 0 ? (
          movieReviews.results.map(review => (
            <li key={review.id}>
              <p><strong>{review.author}</strong>:</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
