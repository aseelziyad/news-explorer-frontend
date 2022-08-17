import React from 'react';

const SearchForm = (props) => {
  const { onClick } = props;

  
  const handleClick = (event) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <form className='search-form'>
      <input
        type='text'
        className='search-form__input'
        name='search'
        id='input-search'
        placeholder=' Enter topic'
        required
      />
      <button type='submit' className='search-form__button' onClick={onClick}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
