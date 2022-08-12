import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import ResultsNotFound from '../ResultsNotFound/ResultsNotFound';
import Preloader from '../Preloader/Preloader';

import NewsCardList from '../NewsCardList/NewCardList';

import { useState } from 'react';

const resultSearch = NewsCardList;

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchResult, setIsSearchResult] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const handleSearchClick = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSearchResult(false);
    setIsNotFound(false);

    // TODO API call -> get request (retrieve search result)
    // const resultSearch = retrieveSearchResult() -> returns list

    setTimeout(() => {
      if (resultSearch) {
        setIsSearchResult(true);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    }, 2000);
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
      {isSearchResult && <SearchResults resultSearch={resultSearch} />}
      {isNotFound && <ResultsNotFound />}
      <About />
    </>
  );
}
