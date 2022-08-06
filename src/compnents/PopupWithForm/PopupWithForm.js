export default function PopupWithForm(props) {
  const {
    name,
    title,
    buttonText,
    isOpen,
    onClose,
    onSubmit,
    children,
    switchPopups,
  } = props;
  
  // const handleLinkClick = () => {
  //   onClose();
  //  switchPopups();
  // };
  const switchLink = buttonText === 'Sign in' ? 'Sign Up' : 'Sign in';

  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_active' : ''}`}>
      <div className='popup__box'>
        <button
          type='button'
          aria-label='Close popup'
          className='popup__close-button'
          onClick={onClose}
        ></button>
        <h2 className='popup__title'>{title}</h2>
        <form
          action='#'
          onSubmit={onSubmit}
          // className='popup__form'
          className={`popup__form popup__form_type${name}`}
          name={name}
        >
          {children}
          <button type='submit' className='popup__submit-button'>
            {buttonText}
          </button>
        </form>
        <p className='popup__text'>
          or{' '}
          <span className='popup__link' onClick={switchPopups}>
            {switchLink}
          </span>
        </p>
      </div>
    </div>
  );
}
