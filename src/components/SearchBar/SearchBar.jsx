import { IoSearch } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import css from './SearchBar.module.css';

export const SearchBar = ({ setSearchParams }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ params: form.elements.searchBar.value });
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchBar"
          autoComplete="off"
          autoFocus
          placeholder="Search video ... "
        />
        <button className={css.btn} type="submit">
          <IconContext.Provider value={{ color: 'wheat', size: 20 }}>
            <IoSearch />
          </IconContext.Provider>
        </button>
      </form>
    </div>
  );
};
