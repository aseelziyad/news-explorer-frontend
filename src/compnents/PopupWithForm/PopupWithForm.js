export default function PopupWithForm(props) {
  const {
    name,
    title,
    isOpen,
    onClose,
    onSubmit,
    children,
  } = props;
  

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
          className={`popup__form popup__form_type${name}`}
          name={name}
        >
          {children}
        </form>
      </div>
    </div>
  );
}
