import React from 'react';
import bojack from '../../images/bojack.jpeg';


export default function About() {
    return (
      <section className='about'>
        <img src={bojack} className='about__image' alt='Author' />
        <div className='about__container'>
          <h2 className='about__title'>About the author</h2>
          <p className='about__subtitle'>
            Hey, my name is Aseel, this is my final project at Practicum100 for
            web development course
          </p>
          <p className='about__subtitle'>
            This project was built using all the skills metheod i've learned
            during thre course and{' '}
          </p>
        </div>
      </section>
    );
}