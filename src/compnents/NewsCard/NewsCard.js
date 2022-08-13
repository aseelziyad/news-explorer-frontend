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
  isLoggedIn,
}) {
  const [isVisiable, setIsVisiable] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { pathname } = useLocation();

  function handleBookmarked() {
    isBookmarked ? setIsBookmarked(false) : setIsBookmarked(true);
  }

  return (
    <article className='news-card'>
      <img className='news-card__image' src={cardImage} alt={cardTitle} />
      {pathname === '/saved-news' && (
        <p className='news-card__keyword'>{cardKeyword}</p>
      )}

      {pathname === '/' ? (
        <button
          className='news-card__button'
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
          className='news-card__button'
          onMouseEnter={() => setIsVisiable(true)}
          onMouseLeave={() => setIsVisiable(false)}
        >
          <img src={isVisiable ? trashBold : trash} alt='bookmark' />
        </button>
      )}

      {isVisiable && (
        <p className='news-card__message'>
          {pathname === '/' ? 'Sign in to save articles' : 'Remove from saved'}
        </p>
      )}
      <p className='news-card__date'>{cardDate}</p>
      <h3 className='news-card__title'>{cardTitle}</h3>
      <p className='news-card__text'>{cardText}</p>
      <a herf='/' target='_blank' className='news-card__source'>
        {cardSource}
      </a>
    </article>
  );
}
