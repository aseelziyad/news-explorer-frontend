import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import ResultsNotFound from '../ResultsNotFound/ResultsNotFound';
import ResultsError from '../ResultsError/ResultsError';
import Preloader from '../Preloader/Preloader';
import newsApi from '../../utils/NewsApi';
import { useState, useRef, useEffect } from 'react';

const DISPLAY_COUNT = 3;

export default function Main() {
  const searchInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchResult, setIsSearchResult] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [articlesCount, setArticlesCount] = useState(DISPLAY_COUNT);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const [keyword, setKeyword] = useState(
    localStorage.getItem('currentKeyword')
  );
  const [searchInput, setSearchInput] = useState('');
  const [searchArticles, setSearchArticles] = useState(
    localStorage.getItem('currentArticles', [])
  );

  useEffect(() => {
    localStorage.setItem('currentKeyword', keyword);
  }, [keyword]);

  useEffect(() => {
    localStorage.setItem('currentArticles', searchArticles);
  }, [searchArticles]);

  useEffect(() => {
    localStorage.setItem('currentArticlesCount', articlesCount);
  }, [articlesCount]);


  function handleSearchClick(event) {
    event.preventDefault();
  const currentKeyword = searchInputRef.current.value;
  setKeyword(currentKeyword);
    setIsLoading(true);

    // always clear artcles on click and error message
    setSearchArticles([]);
    setArticlesCount(3);
    setSearchErrorMessage('');

    if (currentKeyword === '') {
      setSearchInput('   Please enter a keyword');
      setIsLoading(false);
      setIsNotFound(true);
      setSearchArticles([]);
      return;
    } 
      setKeyword(currentKeyword);

      newsApi
        .getSearchArticles(currentKeyword)

        .then((res) => {
          setIsLoading(false);

          const searchResult = res.articles;
          if (searchResult.length !== 0) {
            setIsSearchResult(true);
            setIsNotFound(false);
            setSearchArticles(searchResult);
            return;
          } else {
            setIsSearchResult(false);
            setIsNotFound(true);
          }
        })
        .catch(() => {
          setIsNotFound(true);
          setIsSearchResult(false);
          setSearchErrorMessage(
            'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.'
          );
        });
  }

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
        <SearchForm onClick={handleSearchClick}>
          <input
            ref={searchInputRef}
            type='text'
            id='input-search'
            name='search'
            autoComplete='off'
            className='search-form__input'
            placeholder={'  Enter topic' || searchInput}
            required
          />
        </SearchForm>
      </main>
      {isLoading && <Preloader />}
      {isSearchResult && (
        <SearchResults
          resultSearch={searchArticles}
          showMore={() =>
            setArticlesCount(
              (articlesCount / DISPLAY_COUNT + 1) * DISPLAY_COUNT
            )
          }
        />
      )}
      {isNotFound && <ResultsNotFound />}
      {searchErrorMessage && <ResultsError />}
      <About />
    </>
  );
}
