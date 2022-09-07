import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
export default function SavedNewsHeader({ children }) {
  
  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved Articles</h2>
      {children}
    </section>
  );
}
