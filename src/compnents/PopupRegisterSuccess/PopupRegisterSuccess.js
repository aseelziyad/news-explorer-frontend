import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupRegistered = (props) => {

  const { name, isOpen, onClose, onSubmit, buttonText } = props;
  
    const handleRedircet = (event) => {
      event.preventDefault();
      onSubmit(event);
    };
  

    // return (
    //   <div className={`popup popup_${name} ${isOpen ? 'popup_active' : ''}`}>
    //     <div className='popup__registered'>
    //       <button
    //         type='button'
    //         onClose={onClose}
    //         className='popup__close-button'
    //       ></button>
    //       <h2 className='popup__registered-title'>
    //         Registration successfully completed!
    //       </h2>
    //       <button
    //         type='button'
    //         className='popup__registered-button'
    //         onSubmit={handleRedircet}
    //       >
    //         Sign in
    //       </button>
    //     </div>
    //   </div>
    // );

  return (
    <PopupWithForm
      title='Registration successfully completed!'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleRedircet}
      buttonText='Sign in'
    ></PopupWithForm>
  );
}

export default PopupRegistered;
