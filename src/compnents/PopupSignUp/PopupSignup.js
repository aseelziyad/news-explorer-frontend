import React from 'react';
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
      name='sign-up'
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
      <span id='input-email-error' className='popup__error'></span>
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
      <span id='input-password-error' className='popup__error'></span>
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
      <span id='input-username-error' className='popup__error'></span>
      <button type='submit' className='popup__submit-button'>
        Sign up
      </button>
      <p className='popup__text'>
        or{' '}
        <span className='popup__link' onClick={switchPopups}>
          Sign in
        </span>
      </p>
    </PopupWithForm>
  );
};

export default PopupSignup;
