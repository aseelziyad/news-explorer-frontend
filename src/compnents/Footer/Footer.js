import React from 'react';
import { Link } from 'react-router-dom';
import githubicon from '../../images/github-icon.svg'
import facebookicon from '../../images/facebook-icon.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&#169;2022 Supersite, Powered by News API</p>
      <nav className='footer__container'>
        <ul className='footer__links'>
            <Link className='footer__link' to='/'>
              Home
            </Link>
            <a
              className='footer__link'
              href='https://www.practicum100.org/'
              target='_blank'
              rel='noreferrer'
            >
              Practicum by Yandex
            </a>
        </ul>
        <ul className='footer__icons'>
            <a
              className='footer__icon'
              href='https://github.com/aseelziyad'
              target='_blank'
              rel='noreferrer'
            >
              <img src={githubicon} alt='GitHub icon' />
            </a>
            <a
              className='footer__icon'
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
            >
              <img src={facebookicon} alt='Facebook icon' />
            </a>
        </ul>
      </nav>
    </footer>
  );
}
