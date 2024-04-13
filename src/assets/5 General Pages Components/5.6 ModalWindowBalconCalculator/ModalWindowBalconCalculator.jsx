import ContactForm from '../5.1 ContactForm/ContactForm';
import BalconCalculator from '../5.5 BalconCalculator/BalconCalculator';
import './ModalWindowBalconCalculator.scss';

const ModalWindowBalconCalculator = ({ modalData, setModalState }) => {
  const openModalWindow = () => {
    setModalState(modalData => true);
  };

  const closeModalWindow = () => {
    setModalState(modalData => false);
  };

  const onCloseModalWindowEscape = e => {
    if (e.target && e.code === 'Escape' && modalData === true) {
      closeModalWindow();
      window.removeEventListener('keydown', onCloseModalWindowEscape);
    }
  };

  window.addEventListener('keydown', onCloseModalWindowEscape);

  return (
    <>
      <div className={`modal_window_on${modalData ? '' : ' modal_window_off'}`}>
        <div className="modal_window_on_content">
          <div className="modal_window_on_content_container_close_btn">
            <button onClick={() => closeModalWindow()} className="modal_window_on_content_container_close_btn_btn">
              X
            </button>
          </div>
          <div className="modal_window_on_content_container_content">
            <BalconCalculator setModalState={setModalState} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWindowBalconCalculator;
