import './ModalWindow.scss';

import ContactForm from '../5.1 ContactForm/ContactForm';
import BalconCalculator from '../5.5 BalconCalculator/5.5.1 BalconCalculator/BalconCalculator';

import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import FinishingMaterialCalculator from '../5.9 FinishingMaterialCalculator/FinishingMaterialCalculator';
import DisplayImage from '../5.10 DisplayImage/DisplayImage';

const ModalWindow = ({ modalWindowState, setModalWindowState, langugeApp, currencyApp }) => {
  const { component, componentType, display, closeOverlay, closeEscapeBtn } = modalWindowState;

  display ? disablePageScroll() : enablePageScroll();

  let displayComponent;

  switch (component) {
    case 'ContactForm':
      displayComponent = (
        <ContactForm
          type={componentType}
          setModalWindowState={setModalWindowState}
          langugeApp={langugeApp}
          currencyApp={currencyApp}
        />
      );
      break;
    case 'BalconCalculator':
      displayComponent = (
        <BalconCalculator setModalWindowState={setModalWindowState} currencyApp={currencyApp} langugeApp={langugeApp} />
      );
      break;
    case 'FinishingMaterialCalculator':
      displayComponent = (
        <FinishingMaterialCalculator
          langugeApp={langugeApp}
          componentType={componentType}
          currencyApp={currencyApp}
          setModalWindowState={setModalWindowState}
        />
      );
      break;
    case 'DisplayImage':
      displayComponent = <DisplayImage componentType={componentType} />;

      break;
    default:
      displayComponent = <p>No component</p>;
      break;
  }

  const closeModalWindow = () => {
    setModalWindowState(modalWindowState => {
      return { ...modalWindowState, display: false };
    });

    setTimeout(() => {
      setModalWindowState({
        component: '',
        componentType: '',
        display: false,
        closeOverlay: true,
        closeEscapeBtn: true,
      });
    }, 300);
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
      <div
        className={`modal-window__overlay ${display ? '' : ' modal-window__hidden'}`}
        onClick={e => onCloseModalWindowClickOverlay(e)}
      >
        <div className="modal-window">
          <button onClick={() => closeModalWindow()} className="modal-window__close-btn">
            X
          </button>

          {displayComponent}
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
