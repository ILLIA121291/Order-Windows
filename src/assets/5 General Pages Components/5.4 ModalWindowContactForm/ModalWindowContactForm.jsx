import ContactForm from '../5.1 ContactForm/ContactForm';
import './ModalWindowContactForm.scss';

const ModalWindowContactForm = ({ modalData, setModalState }) => {
  const { modalState, type } = modalData;

  const openModalWindow = () => {
    setModalState(modalData => {
      return { ...modalData, modalState: true };
    });
  };

  const closeModalWindow = () => {
    setModalState(modalData => {
      return { ...modalData, modalState: false };
    });
  };

  const onCloseModalWindowClickOverlay = e => {
    if (e.target && e.target.className == 'modal_window_on') {
      closeModalWindow();
    }
  };

  const onCloseModalWindowEscape = e => {
    if (e.target && e.code === 'Escape' && modalData.modalState === true) {
      closeModalWindow();
      window.removeEventListener('keydown', onCloseModalWindowEscape);
    }
  };

  window.addEventListener('keydown', onCloseModalWindowEscape);

  return (
    <>
      <div className={`modal_window_on${modalState ? '' : ' modal_window_off'}`} onClick={onCloseModalWindowClickOverlay}>
        <div className="modal_window_on_content">
          <div className="modal_window_on_content_container_close_btn">
            <button onClick={() => closeModalWindow()} className="modal_window_on_content_container_close_btn_btn">
              X
            </button>
          </div>
          <div className="modal_window_on_content_container_content">
            <ContactForm type={type} setModalState={setModalState} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWindowContactForm;
