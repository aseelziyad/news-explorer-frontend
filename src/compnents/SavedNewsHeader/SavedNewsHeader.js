export default function SavedNewsHeader() {
    return (
      <section className='saved-news-header'>
        <h2 className='saved-news-header__title'>Saved Articles</h2>
        <h3 className='saved-news-header__user-articles'>
          Elise, you have saved articles
        </h3>
        <h4 className='saved-news-header__keywords'>
          By keywords: {''}
          <span className='saved-news-header__keywords-list'>
            Nature, Yellowstone, and 2 other
          </span>
        </h4>
      </section>
    );
}