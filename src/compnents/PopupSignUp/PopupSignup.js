import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
const PopupSignup = (props) => {
  const { isOpen, onClose, switchPopups, onSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText='Sign up'
      title='Sign up'
      name='SignUp'
      switchPopups={switchPopups}
    >
      <label className='popup__field'>
        Email
        <input
          type='email'
          className='popup__input'
          name='email'
          id='input-email'
          placeholder='Enter email'
          required
        />
      </label>
      <span className='popup__error' id='input-email-error'></span>
      <label className='popup__field'>
        Password
        <input
          type='password'
          className='popup__input'
          name='password'
          id='input-password'
          placeholder='Password'
          required
        />
      </label>
      <span className='popup__error' id='input-password-error'></span>
      <label className='popup__field'>
        Username
        <input
          type='text'
          className='popup__input'
          name='username'
          id='input-username'
          placeholder='Username'
          required
        />
      </label>
      <span className='popup__error' id='input-username-error'></span>
    </PopupWithForm>
  );
};

export default PopupSignup;
