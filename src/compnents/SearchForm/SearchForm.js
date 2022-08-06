import React from 'react';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';


export default function SearchForm() {
  // const [search, setSearch] = useState({ name: '', className: '' });

   const handleSearchClick = (event) => {
     event.preventDefault();
    //  setSearch(true);
   };

  // const handleChange = (event) => {
  //   setSearch(event.target.value);
  // };
  
  return (
    <form className='search-form'>
      {/* <div className='search-form__container'> */}
      <input
        type='text'
        className='search-form__input'
        name='search'
        id='input-search'
        placeholder=' Enter topic'
        required
      />
      <button
        type='submit'
        className='search-form__button'
        onSubmit={handleSearchClick}
      >
        Search
      </button>
      <preloader />
    </form>
  );
}
