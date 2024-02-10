import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import style from './App.module.css';
import { Bars } from 'react-loader-spinner';

import { AppBar } from './AppBar';
import { MovieCast } from './MovieCast';
import { MovieReviews } from './MovieReviews';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <div className={style.container}>
      <AppBar />

      <Suspense
        fallback={
          <Bars
            height="80"
            width="80"
            color="#747bff"
            ariaLabel="bars-loading"
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
