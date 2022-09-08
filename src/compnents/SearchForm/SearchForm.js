import React from 'react';

const SearchForm = (props) => {
  const { onSubmit, children } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className='search-form' onSubmit={onSubmit}>
      {children}
      <button type='submit' className='search-form__button'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
