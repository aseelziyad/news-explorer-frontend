import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardsList from '../NewsCardList/NewsCardList';
import NewsCard from '../NewsCard/NewsCard';
export default function SavedNews(props) {
  const resultSearch = NewsCardsList;
  return (
    <section className='saved-news'>
      <SavedNewsHeader />
      <ul className='news-card-list'>
          {resultSearch.length > 0 &&
            resultSearch.map((newsCard) => (
              <NewsCard key={newsCard.id}
                cardImage={newsCard.cardImage}
                cardKeyword={newsCard.cardKeyword}
                cardDate={newsCard.cardDate}
                cardTitle={newsCard.cardTitle}
                cardText={newsCard.cardText}
                cardSource={newsCard.cardSource}
              />
            ))}
      </ul>
    </section>
  );
}
