import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <IoArrowBack />
      {children}
    </Link>
  );
};
