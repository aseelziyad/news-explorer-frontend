import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import SearchResults from '../SearchResults/SearchResults';
import PreloaderNotFound from '../PreloaderNotFound/PreloaderNotFound';
export default function Main() {
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
        <SearchForm />
      </main>
      <Preloader />
      <SearchResults />
      <PreloaderNotFound />
      <About />
    </>
  );

}
