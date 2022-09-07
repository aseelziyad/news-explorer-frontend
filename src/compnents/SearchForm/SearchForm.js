import React from 'react';

const SearchForm = (props) => {
  const { onClick, children } = props;

  return (
    <form className='search-form'>
      {children}
      <button type='submit' className='search-form__button' onClick={onClick}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
