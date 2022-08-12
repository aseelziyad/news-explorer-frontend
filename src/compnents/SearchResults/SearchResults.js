import NewsCard from '../NewsCard/NewsCard';

const SearchResults = ({ resultSearch }) => {
  return (
    <div className='search-results'>
      <h2 className='search-results__title'>Search results</h2>
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
      <button className='search-results__button'>Show more</button>
    </div>
  );
};

export default SearchResults;
