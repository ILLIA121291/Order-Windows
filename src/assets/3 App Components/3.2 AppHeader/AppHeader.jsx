import './AppHeader.scss';
import logo from './img/logo.png';
import callBtn from './img/edit.png';
import clock from './img/clock.png';
import phone from './img/phone.png';

import mainTextApp from '../../4 General Media-Info Recourses/01 Text/1.0 mainTextApp/mainTextApp.jsx';
const { textHeader, textGeneralInformation } = mainTextApp;

const AppHeader = props => {
  return (
    <header className="app-header">
      <div className="general-container app-header__container">
        <div className="app-header__logo">
          <img className="app-header__logo-img" src={logo} alt="Company logo" />
        </div>
        <h1 className="app-header__slogan">{textHeader.slogan}</h1>
        <button
          className="app-header__btn"
          onClick={() =>
            props.setModalWindowState(modalWindowState => {
              return {
                ...modalWindowState,
                component: 'ContactForm',
                componentType: 'callMeasure',
                display: true,
              };
            })
          }
        >
          <img className="app-header__btn-img" src={callBtn} alt="measurer call button" />
          <p className="app-header__btn-text">
            {textHeader.callMeasureBtn.one} <br />
            {textHeader.callMeasureBtn.two}
          </p>
        </button>
        <div className="app-header__working-time">
          <img className="app-header__working-time-img" src={clock} alt="clock icon" />
          <p className="app-header__working-time-text">
            {textGeneralInformation.workingDays}
            <br />
            <span className="app-header__working-time-text-accent">
              {textGeneralInformation.workingHours.start}-{textGeneralInformation.workingHours.end}
            </span>
          </p>
        </div>
        <div className="app-header__phone">
          <img className="app-header__phone-img" src={phone} alt="phone icon" />
          <p className="app-header__phone-text">
            {textGeneralInformation.telphone}
            <br />
            <a
              className="app-header__phone-link"
              href="#"
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
              {textHeader.requestCallBackBtn}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
