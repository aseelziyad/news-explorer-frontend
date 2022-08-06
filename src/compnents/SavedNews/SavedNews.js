import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewCardList';
export default function SavedNews(props) {
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      <NewsCardList />
    </section>
  );
}
