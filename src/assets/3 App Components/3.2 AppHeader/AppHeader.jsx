import './AppHeader.scss';
import logo from './img/logo.png';
import callBtn from './img/edit.png';
import clock from './img/clock.png';
import phone from './img/phone.png';

import LanguagePanel from '../../5 General Pages Components/5.7 LanguagePanel/LanguagePanel';
import CurrencyPanel from '../../5 General Pages Components/5.8 CurrencyPanel/CurrencyPanel';

const AppHeader = props => {
  const { textHeader, textGeneralInformation } = props.langugeApp;

  return (
    <header className="app-header">
      <div className="general-container header-main-info-message">!!! {textHeader.headerMainInfoMessage} !!!</div>
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
      <NavigationPanel
        textHeader={textHeader}
        langugeApp={props.langugeApp}
        setLangugeApp={props.setLangugeApp}
        currencyApp={props.currencyApp}
        setCurrencyApp={props.setCurrencyApp}
      />
    </header>
  );
};

const NavigationPanel = props => {
  return (
    <nav className="general-container nav-panel__container">
      <CurrencyPanel currencyApp={props.currencyApp} setCurrencyApp={props.setCurrencyApp} />
      <LanguagePanel setLangugeApp={props.setLangugeApp} langugeApp={props.langugeApp} />
    </nav>
  );
};

export default AppHeader;
