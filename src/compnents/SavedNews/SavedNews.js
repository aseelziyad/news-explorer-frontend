import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import NewsCardsList from '../NewsCardList/NewsCardList';
import NewsCard from '../NewsCard/NewsCard';
export default function SavedNews(props) {
  const resultSearch = NewsCardsList();
  return (
    <section className='saved-news'>
      <SavedNewsHeader />
      <section className='newsCard-list'>
        <div className='newsCard-list__cards'>
          {resultSearch.length > 0 &&
            resultSearch.map((newsCard) => (
              <NewsCard
                cardImage={newsCard.cardImage}
                cardKeyword={newsCard.cardKeyword}
                cardDate={newsCard.cardDate}
                cardTitle={newsCard.cardTitle}
                cardText={newsCard.cardText}
                cardSource={newsCard.cardSource}
              />
            ))}
        </div>
      </section>
    </section>
  );
}
