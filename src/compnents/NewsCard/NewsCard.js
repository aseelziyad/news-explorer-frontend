/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bookmark from '../../images/Bkmark.svg';
import bookmarkFilled from '../../images/flag-icon-filled.svg';
import trash from '../../images/trash.svg';
import bookmarkBold from '../../images/bookmarkbold.svg';
import trashBold from '../../images/trashbold.svg';
import api from '../../utils/MainApi';

export default function NewsCard({
  cardTitle,
  cardAuthor,
  cardDescription,
  cardUrl,
  cardUrlToImage,
  cardKeyword,
  cardPublishedAt,
  cardContent,
  cardSource,
  isLoggedIn,
  _id,
  handleUpdateSavedArticlesAfterDelete,
}) {
  const [isVisiable, setIsVisiable] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [currentId, setCurrentId] = useState(_id);

  const { pathname } = useLocation();

  function formatDate(date) {
    const dateArr = date.toString().slice(0, 10).split('-', 3);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    dateArr[1] = monthNames[parseInt(dateArr[1]) - 1];
    return `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`;
  }

  function handleMouseEnter() {
    pathname === '/' && isLoggedIn ? setIsVisiable(false) : setIsVisiable(true);
  }

  function handleMouseLeave() {
    setIsVisiable(false);
  }

  function handleCardDelete(event) {
    setIsBookmarked(true);
    const isLoggedIn = localStorage.getItem('jwt') !== null;
    if (isLoggedIn && pathname === '/saved-news' && isBookmarked === false) {
      api
        .deleteArticle(event.currentTarget.parentNode.id)
        .then((res) => {
          // fetch saved articles from localstorage (with deleted article)
          const savedArticles = JSON.parse(
            localStorage.getItem('savedArticles')
          );

          // remove the deleted article from cachd saved articles
          const updatedSavedArticles = savedArticles.filter(
            (obj) => obj._id !== currentId
          );
          handleUpdateSavedArticlesAfterDelete(updatedSavedArticles);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const saveArticle = async (articleData) => {
    return await api.saveArticles(articleData);
  };

  function handleCardSave(event) {
    const isLoggedIn = localStorage.getItem('jwt') !== null;
    if (isLoggedIn && pathname === '/' && isBookmarked === false) {
      console.log('saving articles');
      const articleData = {
        keyword: localStorage.getItem('currentKeyword'),
        title: cardTitle,
        text: cardDescription,
        date: cardPublishedAt,
        source: cardSource,
        link: cardUrl,
        image: cardUrlToImage,
      };
      saveArticle(articleData).then((newArticle) => {
        setIsBookmarked(true);
        setCurrentId(newArticle.data._id);
      });
    } else if (isLoggedIn && pathname === '/' && isBookmarked === true) {
      console.log('calling delete article');
      api
        .deleteArticle(event.currentTarget.parentNode.id)
        .then((res) => {
          console.log(`deletingArticle = ${currentId}`);
          setIsBookmarked(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <li className='news-card' id={_id || currentId}>
      <img className='news-card__image' src={cardUrlToImage} alt={cardTitle} />
      {pathname === '/saved-news' && (
        <p className='news-card__keyword'>{cardKeyword}</p>
      )}

      {pathname === '/' ? (
        <button
          className='news-card__button'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCardSave}
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCardDelete}
        >
          <img src={isVisiable ? trashBold : trash} alt='bookmark' />
        </button>
      )}

      {isVisiable && (
        <p className='news-card__message'>
          {pathname === '/' ? 'Sign in to save articles' : 'Remove from saved'}
        </p>
      )}
      <p className='news-card__date'>{formatDate(cardPublishedAt)}</p>
      <h3 className='news-card__title'>{cardTitle}</h3>
      <p className='news-card__text'>{cardDescription}</p>
      <a herf='/' target='_blank' className='news-card__source'>
        {cardSource}
      </a>
    </li>
  );
}
