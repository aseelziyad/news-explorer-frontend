import React, { useState } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
const PopupSignup = (props) => {
  const { isOpen, onClose, switchPopups, onSubmit} = props;
  const { values, handleChange, errors, isValid, resetForm} = useFormWithValidation();
  
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
          onSubmit({
            email: values.email,
            password: values.password,
            name: values.name,
          });
        }
      };
   React.useEffect(() => {
     resetForm();
   }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText='Sign up'
      title='Sign up'
      name='sign_up'
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
          value={values.email || ''}
          onChange={handleChange}
          required
        />
      </label>
      <span id='input-email-error' className='popup__error_visiable'>
        {errors.email}
      </span>
      <label className='popup__field'>
        Password
        <input
          type='password'
          className='popup__input'
          name='password'
          id='input-password'
          placeholder='Password'
          value={values.password || ''}
          onChange={handleChange}
          minLength={6}
          required
        />
      </label>
      <span id='input-password-error' className='popup__error_visiable'>
        {errors.password}
      </span>
      <label className='popup__field'>
        name
        <input
          type='text'
          className='popup__input'
          name='name'
          id='input-name'
          placeholder='name'
          value={values.name || ''}
          onChange={handleChange}
          minLength={2}
          required
        />
      </label>
      <span id='input-name-error' className='popup__error_visiable'>
        {errors.name}
      </span>
      <button
        type='submit'
        className={`popup__submit-button ${
          isValid ? '' : 'popup__submit-button_disabled'
        }`}
      >
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
