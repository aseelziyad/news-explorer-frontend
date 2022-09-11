import React from 'react';
import { useEffect, useState } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NewsCard from '../NewsCard/NewsCard';

export default function SavedNews({ getSavedArticles }) {
  const [savedArticles, setsavedArticles] = useState([]);

  const currentUser = React.useContext(CurrentUserContext);
  const [orderedKeywordsString, setorderedKeywordsString] = React.useState([]);

  useEffect(() => {
    getSavedArticles()
      .then((res) => {
        setsavedArticles(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getSavedArticles]);

  useEffect(() => {
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));

    const orderKeywords = getOrederedFrequestKeywords(savedArticles);
    let s = '';
    if (orderKeywords.length === 0) {
      s = '';
    } else if (orderKeywords.length === 1) {
      s = orderKeywords[0];
    } else if (orderKeywords.length === 2) {
      s = `${orderKeywords[0]}, ${orderKeywords[1]}`;
    } else {
      s = `${orderKeywords[0]}, ${orderKeywords[1]} and ${
        orderKeywords.length - 2
      } others`;
    }
    setorderedKeywordsString(s);
  }, [savedArticles]);

  function handleUpdateSavedArticlesAfterDelete(updatedSavedCards) {
    getSavedArticles()
      .then((res) => {
        setsavedArticles(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className='saved-news'>
      <SavedNewsHeader savedArticles={savedArticles}>
        <h3 className='saved-news-header__user-articles'>
          {localStorage.getItem('name')}, you have {savedArticles.length} saved
          articles.
        </h3>
        <h4 className='saved-news-header__keywords'>
          By keywords: {''}
          <span className='saved-news-header__keywords-list'>
            {orderedKeywordsString}
          </span>
        </h4>
      </SavedNewsHeader>

      <ul className='news-card-list'>
        {savedArticles.length > 0 &&
          savedArticles.map((newsCard, index) => (
            <NewsCard
              key={index}
              cardKeyword={newsCard.keyword}
              cardTitle={newsCard.title}
              cardDescription={newsCard.text}
              cardUrl={newsCard.link}
              cardUrlToImage={newsCard.image}
              cardPublishedAt={newsCard.date}
              cardSource={newsCard.source}
              _id={newsCard._id}
              handleUpdateSavedArticlesAfterDelete={
                handleUpdateSavedArticlesAfterDelete
              }
            />
          ))}
      </ul>
    </section>
  );
}

function getOrederedFrequestKeywords(savedArticles) {
  const countersObj = {};

  savedArticles.forEach((obj) => {
    const key = obj.keyword;
    if (countersObj[key] === undefined) {
      countersObj[key] = 1;
    } else {
      countersObj[key] += 1;
    }
  });
  let entries = Object.entries(countersObj);
  let sorted = entries.sort((a, b) => b[1] - a[1]);
  const topKeywords = [];
  sorted.forEach((arr) => {
    topKeywords.push(arr[0]);
  });
  return topKeywords;
}
