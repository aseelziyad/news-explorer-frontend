import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

const PopupSignin = (props) => {
  const { isOpen, onClose, switchPopups, onSubmit } = props;

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
       {/* <form className='popup__form' onSubmit={handleSubmit}> */}
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
     </PopupWithForm>
   );
};

// const PopupSignin = ({
//   isOpen,
//   onClose,
//   onSubmit,
//   switchPopups,
//   setIsLoginPopupOpen,
//   setIsLoggedIn,
// }) => {
//   return (
//     <PopupWithForm
//       isOpen={isOpen}
//       onClose={onClose}
//       buttonText='Sign in'
//       title='Sign in'
//       name='SignIn'
//       onSubmit={onSubmit}
//       switchPopups={switchPopups}
//     >
//       {/* <form className='popup__form' onSubmit={handleSubmit}> */}
//       <label className='popup__field'>Email </label>
//       <input
//         type='email'
//         className='popup__input'
//         name='email'
//         id='input-email'
//         placeholder='Enter email'
//         // value={values.email || ''}
//         // onChange={handleChange}
//         required
//       />
//       <span className='popup__error' id='input-email-error'></span>
//       <label className='popup__field'>Password</label>
//       <input
//         type='password'
//         className='popup__input'
//         name='password'
//         id='input-password'
//         placeholder='Enter password'
//         // value={values.password || ''}
//         // onChange={handleChange}
//         required
//       />
//       <span className='popup__error' id='input-email-error'></span>
//     </PopupWithForm>
//   );
// };

export default PopupSignin;