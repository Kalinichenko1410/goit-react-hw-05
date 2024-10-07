import { useEffect, useMemo, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);  
  const [query, setQuery] = useState(""); 
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    const initialQuery = searchParams.get("query") || ""; 
    setQuery(initialQuery); 
  }, [searchParams]);

  useEffect(() => {
    const getMovies = async () => {
      if (!query.trim()) return; 

      try {
        const data = await searchMovies(query); 
        setMovies(data); 
      } catch (error) {
        console.error("Error fetching movies:", error); 
      }
    };

    getMovies(); 
  }, [query]); 

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery); 
    setSearchParams({ query: newQuery });
    if (!newQuery) {
     setSearchParams({});
     setMovies([]);
    }
  };

  const filteredData = useMemo(() => {
    return movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())); 
  }, [query, movies]);

  return (
    <div>
      <h1>Search for Movies</h1>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {query ? (
        <>
          {filteredData.length > 0 ? (
            <>
              <p>Found {filteredData.length} movies.</p> 
            </>
          ) : (
            <p>No movies found.</p> 
          )}
        </>
      ) : (
        <p>Nothing to show. Please enter a search term.</p> 
      )}
      <MovieList movies={filteredData} />
    </div>
  );
};

export default MoviesPage;
