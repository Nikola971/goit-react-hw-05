import css from './LoadMore.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.btnBox}>
      <button className={css.btn} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
