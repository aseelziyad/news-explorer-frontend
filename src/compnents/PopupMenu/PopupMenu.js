/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function PopupMenu({isOpen, onClose, isLoggedIn, onLoginClick }) {
  const { pathname } = useLocation();

  const handleClose = (event) => {
    onClose(event);
  };

  return (
    //   <PopupWithForm
    //     isOpen={isOpen}
    //     onClose={onClose}
    //     buttonText='Sign in'
    //     name='MenuPopup'
    //     // onSubmit={handleSubmit}
    //   >
    <div className={`popup__menu ${isOpen && 'popup__menu_open'}`}>
      <button
        className='popup__menu_close-button'
        onClose={handleClose}
      ></button>
      <nav>
        {pathname === '/' ? (
          <Link to='/saved-news' className='popup__menu-link'>
            Saved articles
          </Link>
        ) : (
          <Link to='/' className='popup__menu-link'>
            Home
          </Link>
        )}
        {/* {pathname === '/' ? (
          <Link to='/saved-news' className='popup__menu-link' >
            Saved articles
          </Link>
        ) : (
          <Link to='/' className='popup__menu-link'>
            Home
          </Link>
        )} */}
      </nav>
      {!isLoggedIn && (
        <button
          type='button'
          className='popup__menu_submit-button'
          onClick={onLoginClick}
        >
          Sign in
        </button>
      )}
    </div>
    // </PopupWithForm>
  );
}