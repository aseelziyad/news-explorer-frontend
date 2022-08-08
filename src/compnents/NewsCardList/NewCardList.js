import React from 'react';
import { useLocation } from 'react-router-dom';
import image1 from '../../images/image_01.png'
import image2 from '../../images/image_02.png'
import image3 from '../../images/image_03.png'
import image4 from '../../images/image_04.png'
import image5 from '../../images/image_05.png'
import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList() {
  const { pathname } = useLocation();

  return (
    <section className='newsCard-list'>
      {/* {pathname === '/' && (
        <h2 className='newsCard-list__title'>Search results</h2>
      )} */}

      <div className='newsCard-list__cards'>
        <NewsCard
          cardImage={image1}
          cardKeyword='Nature'
          cardDate='November 4, 2020'
          cardTitle='Everyone Needs a Special Sit Spot in Nature'
          cardText={
            'Ever since I read Richard Louvs influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...'
          }
          cardSource='treehugger'
        />
        <NewsCard
          cardImage={image2}
          cardKeyword='Nature'
          cardDate='February 19, 2019'
          cardTitle='Nature makes you better'
          cardText={
            'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.'
          }
          cardSource='national geographic'
        />
        <NewsCard
          cardImage={image3}
          cardKeyword='Yellowstone'
          cardDate='October 19, 2020'
          cardTitle='Nostalgic Photos of Tourists in U.S. National Parks'
          cardText={
            '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be'
          }
          cardSource='National parks traveler'
        />
        {/* <NewsCard
          cardImage={image4}
          cardKeyword='Yellowstone'
          cardDate='November 4, 2020'
          cardTitle='Grand Teton Renews Historic Crest Trail'
          cardText={
            '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...'
          }
          cardSource='National parks traveler'
        />
        <NewsCard
          cardImage={image5}
          cardKeyword='Yellowstone'
          cardDate='March 16, 2020'
          cardTitle='Scientists Dont Know Why Polaris Is So Weird'
          cardText={
            '“Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.'
          }
          cardSource='Treehugger'
        /> */}
      </div>
      {/* {pathname === '/' && (
        <button className='newsCard-list__button'>Show more</button>
      )} */}
    </section>
  );
}