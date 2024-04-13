import './AppFooter.scss';
import logo from '../3.2 AppHeader/img/logo.png';

const AppFooter = props => {
  return (
    <footer className="app-footer">
      <StillQuestions setModalWindowState={props.setModalWindowState} />
      <Footer />
    </footer>
  );
};

const StillQuestions = props => {
  return (
    <div className="app-footer__still-questions">
      <div className="general-container app-footer__still-questions__container">
        <h3 className="app-footer__still-questions-titel">
          {' '}
          Still have questions?
          <button
            className="app-footer__still-questions-btn"
            onClick={() =>
              props.setModalWindowState(modalWindowState => {
                return {
                  ...modalWindowState,
                  component: 'ContactForm',
                  componentType: 'callMeBack',
                  display: true,
                };
              })
            }
          >
            Ask our specialist
          </button>
        </h3>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="app-footer-footer">
      <div className="general-container app-footer-footer__container">
        <div className="app-footer-footer__div"></div>
        <img className="app-footer-footer__img" src={logo} alt="" />
        <h4 className="app-footer-footer__titel">
          {' '}
          +7 (495) 646-61-71 <br />
          <span className="app-footer-footer__titel-accent">info@irvasokna.ru</span>
        </h4>
      </div>
    </div>
  );
};

export default AppFooter;
