import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

const PopupSignin = (props) => {
  const { isOpen, onClose, onSubmit, switchPopups } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
        <PopupWithForm
          isOpen={isOpen}
          onClose={onClose}
          buttonText='Sign in'
          title='Sign in'
          name='SignIn'
          onSubmit={handleSubmit}
          switchPopups={switchPopups}
        >
          <label className='popup__field'>Email </label>
          <input
            type='email'
            className='popup__input'
            name='email'
            id='input-email'
            placeholder='Enter email'
            // value={values.email || ''}
            // onChange={handleChange}
            required
          />
          <span className='popup__error' id='input-email-error'></span>
          <label className='popup__field'>Password</label>
          <input
            type='password'
            className='popup__input'
            name='password'
            id='input-password'
            placeholder='Enter password'
            // value={values.password || ''}
            // onChange={handleChange}
            required
          />
          <span className='popup__error' id='input-email-error'></span>
          <button type='submit' className='popup__submit-button'>
            Sign in
          </button>
          <p className='popup__text'>
            or{' '}
            <span className='popup__link' onClick={switchPopups}>
              Sign up
            </span>
          </p>
        </PopupWithForm>
  );
};


export default PopupSignin;