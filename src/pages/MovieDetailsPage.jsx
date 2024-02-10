import { useParams, useLocation } from 'react-router-dom';
import { getDataById } from '../js/helpers/api';
import { useEffect, useState, useRef } from 'react';
import { Bars } from 'react-loader-spinner';

import { BackLink } from '../components/BackLink';
import { MovieDetails } from '../components/MovieDetails';
import { ErrorMessage } from '../components/ErrorMessage';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  useEffect(() => {
    if (!movieId) return;
    (async () => {
      try {
        setError(false);
        setLoader(true);
        const resp = await getDataById(movieId);
        setMovieDetails(resp);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    })();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkRef.current ?? '/movies'}>Back to movies</BackLink>

      {error && <ErrorMessage />}

      {movieDetails && (
        <MovieDetails
          title={movieDetails.original_title}
          posterPath={movieDetails.poster_path}
          description={movieDetails.overview}
          releaseDate={movieDetails.release_date}
          rating={movieDetails.vote_average}
        />
      )}

      {loader && (
        <Bars
          height="80"
          width="80"
          color="#747bff"
          ariaLabel="bars-loading"
          wrapperClass="loader"
          visible={true}
        />
      )}
    </main>
  );
}
