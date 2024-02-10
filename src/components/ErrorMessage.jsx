import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <p className={css.errMsg}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
};
