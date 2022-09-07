import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const SearchResults = ({ resultSearch, showMore }) => {
  const currentArticlesCount = localStorage.getItem('currentArticlesCount');
  const currentDisplayedResult = resultSearch.slice(0, currentArticlesCount);
  return (
    <div className='search-results'>
      <h2 className='search-results__title'>Search results</h2>
      <ul className='news-card-list'>
        {currentDisplayedResult.length > 0 &&
          currentDisplayedResult.map((newsCard, index) => (
            <NewsCard
              key={index}
              cardKeyword={newsCard.keyword}
              cardTitle={newsCard.title}
              cardAuthor={newsCard.author}
              cardDescription={newsCard.description}
              cardUrl={newsCard.url}
              cardUrlToImage={newsCard.urlToImage}
              cardPublishedAt={newsCard.publishedAt}
              cardContent={newsCard.content}
              cardSource={newsCard.source.name}
            />
          ))}
      </ul>
      <button className='search-results__button' onClick={showMore}>
        Show more
      </button>
    </div>
  );
};

export default SearchResults;
