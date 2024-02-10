import { NavLink, Outlet } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import clsx from 'clsx';
import css from './MovieDetails.module.css';
import { common } from '../js/helpers/common';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const MovieDetails = ({
  title,
  posterPath,
  description,
  releaseDate,
  rating,
}) => {
  const dateConverter = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={css.detailsBox}>
      <img
        className={css.detailsImg}
        src={
          posterPath
            ? `${common.imageBaseUrl}w500${posterPath}`
            : common.movieDefultImage
        }
        alt={`${title} poster`}
        width={500}
      />
      <div>
        <h1>{title}</h1>
        <p className={css.releaseDate}>{dateConverter}</p>
        <p className={css.desc}>{description}</p>
        <p className={css.rating}>{`Rating: ${Math.round(rating)}/10`}</p>
        <p className={css.addTitle}>Additional information</p>

        <ul className={css.addList}>
          <li>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
