import NewsCardList from '../NewsCardList/NewCardList';
import PreloaderNotFound from '../PreloaderNotFound/PreloaderNotFound';

export default function SearchResults() {
  return (
    <div className='search-results'>
      <h2 className='search-results__title'>Search results</h2>
      <NewsCardList />
      <button className='search-results__button'>Show more</button>
    </div>
  );
}
