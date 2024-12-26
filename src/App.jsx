import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Header = lazy(() => import('./components/Header/Header')); 

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
       <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/movies" element={<MoviesPage />} />
  <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
    <Route path="cast" element={<Cast />} />
    <Route path="reviews" element={<Reviews />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>
      </Suspense>
    </div>
  );
};

export default App;
