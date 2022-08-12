import React from 'react';

export default function Preloader() {
  return (
    <section className='preloader'>
      <i className='preloader__circle'></i>
      <h2 className='preloader__text'>Searching for news...</h2>
    </section>
  );
}
