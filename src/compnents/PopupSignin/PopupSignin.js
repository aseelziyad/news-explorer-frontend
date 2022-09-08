import React, { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupSignin = (props) => {
  const { isOpen, onClose, onSubmit, switchPopups } = props;
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();


    const handleSubmit = (event) => {
      event.preventDefault();
      if (isValid) {
        onSubmit({ email: values.email, password: values.password });
      }
    };

   React.useEffect(() => {
     resetForm();
   }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Sign in'
      title='Sign in'
      name='sign_in'
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
        value={values.email || ''}
        onChange={handleChange}
        required
      />
      <span id='input-email-error' className='popup__error_visiable'>
        {errors.email}
      </span>
      <label className='popup__field'>Password</label>
      <input
        type='password'
        className='popup__input'
        name='password'
        id='inputpassword'
        placeholder='Enter password'
        value={values.password || ''}
        onChange={handleChange}
        minLength={6}
        required
      />
      <span id='input-password-error' className='popup__error_visiable'>
        {errors.password}
      </span>
      <button
        type='submit'
        className={`popup__submit-button ${
          isValid ? '' : 'popup__submit-button_disabled'
        }`}
      >
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