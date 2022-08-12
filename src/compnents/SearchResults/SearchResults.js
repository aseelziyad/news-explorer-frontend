import NewsCardList from '../NewsCardList/NewCardList';

const SearchResults = (props) => {
  const { resultSearch } = props;
  return (
    <div className='search-results'>
      <h2 className='search-results__title'>Search results</h2>
      <resultSearch />
      <button className='search-results__button'>Show more</button>
    </div>
  );
}

export default SearchResults;