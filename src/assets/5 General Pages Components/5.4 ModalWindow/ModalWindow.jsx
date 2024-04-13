import './ModalWindow.scss';

import ContactForm from '../5.1 ContactForm/ContactForm';
import BalconCalculator from '../5.5 BalconCalculator/BalconCalculator';
import { useEffect } from 'react';

const ModalWindow = ({ modalWindowState, setModalWindowState }) => {
  const { component, componentType, display, closeOverlay, closeEscapeBtn } = modalWindowState;

  let displayComponent;

  switch (component) {
    case 'ContactForm':
      displayComponent = <ContactForm type={componentType} setModalWindowState={setModalWindowState} />;
      break;
    case 'BalconCalculator':
      displayComponent = <BalconCalculator setModalWindowState={setModalWindowState} />;
      break;
    default:
      displayComponent = <p>No component</p>;
      break;
  }

  const openModalWindow = () => {
    setModalWindowState(modalWindowState => {
      return { ...modalWindowState, display: true };
    });
  };

  const closeModalWindow = () => {
    setModalWindowState(modalWindowState => {
      return { ...modalWindowState, display: false };
    });
  };

  const onCloseModalWindowClickOverlay = e => {
    if (e.target && e.target.className == 'modal-window__overlay ' && closeOverlay == true) {
      closeModalWindow();
    }
  };

  const onCloseModalWindowEscape = e => {
    if (e.target && e.code === 'Escape' && display === true && closeEscapeBtn == true) {
      closeModalWindow();
      window.removeEventListener('keydown', onCloseModalWindowEscape);
    }
  };

  window.addEventListener('keydown', onCloseModalWindowEscape);

  return (
    <>
      <div className={`modal-window__overlay ${display ? '' : ' modal-window__hidden'}`} onClick={onCloseModalWindowClickOverlay}>
        <div className="modal-window__container">
          <div className="modal-window">{displayComponent}</div>
          <button onClick={() => closeModalWindow()} className="modal-window__close-btn">
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
