import './AppHeader.scss';
import logo from './img/logo.png';
import callBtn from './img/edit.png';
import clock from './img/clock.png';
import phone from './img/phone.png';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="general-container app-header__container">
        <div className="app-header__logo">
          <img className="app-header__logo-img" src={logo} alt="Company logo" />
        </div>
        <h1 className="app-header__slogan">Glazing of balconies and loggias in New York and the surrounding area New York</h1>
        <button className="app-header__btn">
          <img className="app-header__btn-img" src={callBtn} alt="measurer call button" />
          <p className="app-header__btn-text">
            CALL <br />
            MEASURER
          </p>
        </button>
        <div className="app-header__working-time">
          <img className='app-header__working-time-img' src={clock} alt="clock icon" />
          <p className='app-header__working-time-text' > seven days a week<br/>
          <span className='app-header__working-time-text-accent'>9:00-18:00</span>
          </p>
        </div>
        <div className="app-header__phone">
          <img className='app-header__phone-img' src={phone} alt="phone icon" />
          <p className='app-header__phone-text' >+1 (929) 590-58-84<br/>
          <a className='app-header__phone-link' href="#">Request call back</a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
