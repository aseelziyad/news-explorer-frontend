import NewsCard from '../NewsCard/NewsCard';

const SearchResults = ({ resultSearch }) => {
  return (
    <div className='search-results'>
      <h2 className='search-results__title'>Search results</h2>
      <ul className='news-card-list'>
        <li className='news-card-list__cards'>
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
        </li>
      </ul>
      <button className='search-results__button'>Show more</button>
    </div>
  );
};

export default SearchResults;
