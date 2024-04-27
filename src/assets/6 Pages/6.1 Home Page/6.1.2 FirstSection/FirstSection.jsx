import './FirstSection.scss';

import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import BlueCircles from '../../../5 General Pages Components/5.6 BlueCircles/BlueCircles';

import useDisplayPriceInCurrency from '../../../1 Utilities/useDisplayPriceInCurrency';

const FirstSection = props => {
  const textFirstSection = props.langugeApp.textHomePage.textFirstSection;

  return (
    <section className="first-section">
      <div className="general-container first-section__container">
        <div className="first-section__left">
          <h2 className="first-section__left-titel">
            {textFirstSection.titel.one} <br />
            <span className="first-section__left-titel-accent">
              {textFirstSection.titel.two} {useDisplayPriceInCurrency(props.currencyApp, 1500, true)} {props.currencyApp}!
            </span>
          </h2>
          <BlueCircles langugeApp={props.langugeApp} />
        </div>
        <div className="first-section__right">
          <ContactForm type={'callMeasure'} langugeApp={props.langugeApp} />
        </div>
      </div>
      <div className="general-container first-section__mobile-contact-from">
        <ContactForm type={'callMeasure'} langugeApp={props.langugeApp} />
      </div>
    </section>
  );
};

export default FirstSection;
