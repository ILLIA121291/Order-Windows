import './AppFooter.scss';
import logo from '../3.2 AppHeader/img/logo.png';

const AppFooter = props => {
  const textFooter = props.langugeApp.textFooter;
  return (
    <footer className="app-footer">
      <StillQuestions setModalWindowState={props.setModalWindowState} textFooter={textFooter} />
      <Footer langugeApp={props.langugeApp} />
    </footer>
  );
};

const StillQuestions = props => {
  return (
    <div className="app-footer__still-questions">
      <div className="general-container app-footer__still-questions__container">
        <p className="app-footer__still-questions-titel">{props.textFooter.blueBlock.titel.one}</p>
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
          {props.textFooter.blueBlock.titel.two}
        </button>
      </div>
    </div>
  );
};

const Footer = props => {
  const { textGeneralInformation } = props.langugeApp;
  return (
    <div className="app-footer-footer">
      <div className="general-container app-footer-footer__container">
        <img className="app-footer-footer__img" src={logo} alt="" />
        <h4 className="app-footer-footer__titel">
          {textGeneralInformation.telphone} <br />
          <span className="app-footer-footer__titel-accent">{textGeneralInformation.email}</span>
        </h4>
      </div>
    </div>
  );
};

export default AppFooter;
