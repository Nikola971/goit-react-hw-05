import css from './MovieList.module.css';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movieList }) => {
  return (
    <ul className={css.list}>
      {movieList.map(({ id, title, poster_path, release_date }, index) => (
        <MovieItem
          key={`${id}-${index}`}
          id={id}
          title={title}
          posterPath={poster_path}
          releaseDate={release_date}
        />
      ))}
    </ul>
  );
};
