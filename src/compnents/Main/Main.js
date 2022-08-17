import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import ResultsNotFound from '../ResultsNotFound/ResultsNotFound';
import Preloader from '../Preloader/Preloader';

import NewsCardsList from '../NewsCardList/NewsCardList';
import { useState } from 'react';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
   const [isSearchResult, setIsSearchResult] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchResultList, setSearchResultList] = useState([]);
  const handleSearchClick = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSearchResult(false);
    setIsNotFound(false);

    // TODO API call -> get request (retrieve search result)
    const resultSearch = NewsCardsList;
    // const resultSearch = [];
    // const resultSearch = retrieveSearchResult() -> returns list

    setTimeout(() => {
      if (resultSearch.length > 0) {
        setIsSearchResult(true)
        setSearchResultList(resultSearch);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <main className='main'>
        <div className='main__container'>
          <h2 className='main__title'>What's going on in the world?</h2>
          <p className='main__text'>
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <SearchForm onClick={handleSearchClick}></SearchForm>
      </main>
      {isLoading && <Preloader />}
      {setIsSearchResult && <SearchResults resultSearch={searchResultList} />}
      {/* {searchResultList.length > 0 && (
        <SearchResults resultSearch={searchResultList} />
      )} */}
      {isNotFound && <ResultsNotFound />}
      <About />
    </>
  );
}
