import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import css from './MovieCast.module.css';
import { getCreditsById } from '../js/helpers/api';
import { common } from '../js/helpers/common';
import { ErrorMessage } from './ErrorMessage';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  useEffect(() => {
    if (!movieId) return;

    (async () => {
      try {
        setError(false);
        setLoader(true);
        const resp = await getCreditsById(movieId);
        setCredits(resp.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && <ErrorMessage />}

      {credits ? (
        <section className={css.cast}>
          <ul className={css.castList}>
            {credits.map(({ credit_id, profile_path, name, character }) => {
              return (
                <li key={credit_id}>
                  <img
                    className={css.authorImg}
                    src={
                      profile_path
                        ? `${common.imageBaseUrl}w185${profile_path}`
                        : common.castDefaultImage
                    }
                    alt="poster"
                    width={250}
                  />
                  <p>{name}</p>
                  <p>{`(${character})`}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <section className={css.cast}>
          <p>No information</p>
        </section>
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
    </>
  );
};
