import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupRegistered = (props) => {

  const {  isOpen, onClose, onSubmit, switchPopups } = props;
  
    const handleRedircet = (event) => {
      event.preventDefault();
      onSubmit(event);
    };

  return (
        <PopupWithForm
          name='register_success'
          title='Registration successfully completed!'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleRedircet}
        >
          <span className='popup__link-success' onClick={switchPopups}>
            Sign in
          </span>
        </PopupWithForm>
  );
}

export default PopupRegistered;
