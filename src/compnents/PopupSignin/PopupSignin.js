import React from 'react';
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
      name='sign-in'
      onSubmit={handleSubmit}
      switchPopups={switchPopups}
    >
      <label className='popup__field'>Email </label>
      <input
        type='email'
        className='popup__input'
        name='email'
        id='inputemail'
        placeholder='Enter email'
        required
      />
      <span id='input-email-error' className='popup__error'>
        invalid email address
      </span>
      <label className='popup__field'>Password</label>
      <input
        type='password'
        className='popup__input'
        name='password'
        id='inputpassword'
        placeholder='Enter password'
        required
      />
      <span id='input-password-error' className='popup__error'></span>
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