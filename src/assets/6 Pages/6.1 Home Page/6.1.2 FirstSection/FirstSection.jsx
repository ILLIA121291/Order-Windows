import './FirstSection.scss';

import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import BlueCircles from '../../../5 General Pages Components/5.6 BlueСircles/BlueCircles';
import mainTextApp from '../../../4 General Media-Info Recourses/01 Text/1.0 mainTextApp/mainTextApp';

const textFirstSection = mainTextApp.textHomePage.textFirstSection;

const FirstSection = () => {
  return (
    <section className="first-section">
      <div className="general-container first-section__container">
        <div className="first-section__left">
          <h2 className="first-section__left-titel">
            {textFirstSection.titel.one} <br />
            <span className="first-section__left-titel-accent">{textFirstSection.titel.two}</span>
          </h2>
          <BlueCircles />
        </div>
        <div className="first-section__right">
          <ContactForm type={'callMeasure'} />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
