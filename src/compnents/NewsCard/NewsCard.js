/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bookmark from '../../images/Bkmark.svg';
import bookmarkFilled from '../../images/flag-icon-filled.svg';
import trash from '../../images/trash.svg';
import bookmarkBold from '../../images/bookmarkbold.svg';
import trashBold from '../../images/trashbold.svg';

export default function NewsCard({
  cardImage,
  cardDate,
  cardTitle,
  cardText,
  cardSource,
  cardKeyword,
}) {
  const [isVisiable, setIsVisiable] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { pathname } = useLocation();

  function handleBookmarked() {
    isBookmarked ? setIsBookmarked(false) : setIsBookmarked(true);
  }

  return (
    <div className='newsCard'>
      <img className='newsCard__image' src={cardImage} alt={cardTitle} />
      {pathname === '/saved-news' && (
        <p className='newsCard__keyword'>{cardKeyword}</p>
      )}
      
      {isVisiable && (
        <p className='newsCard__message'>
          {pathname === '/' ? 'Sign in to save articles' : 'Remove from saved'}
        </p>
      )}
      {pathname === '/' ? (
        <button
          className='newsCard__button'
          onMouseEnter={() => setIsVisiable(true)}
          onMouseLeave={() => setIsVisiable(false)}
          onClick={handleBookmarked}
        >
          {isBookmarked ? (
            <img src={bookmarkFilled} alt='bookmark' />
          ) : (
            <img src={isVisiable ? bookmarkBold : bookmark} alt='bookmark' />
          )}
        </button>
      ) : (
        <button
          className='newsCard__button'
          onMouseEnter={() => setIsVisiable(true)}
          onMouseLeave={() => setIsVisiable(false)}
        >
          <img src={isVisiable ? trashBold : trash} alt='bookmark' />
        </button>
      )}
      <p className='newsCard__date'>{cardDate}</p>
      <h3 className='newsCard__title'>{cardTitle}</h3>
      <p className='newsCard__text'>{cardText}</p>
      <a herf='/' target='_blank' className='newsCard__source'>
        {cardSource}
      </a>
    </div>
  );
}
