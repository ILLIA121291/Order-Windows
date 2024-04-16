import './PromotionSection.scss';
import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import Timer from '../../../5 General Pages Components/5.2 Timer/Timer';

import mainTextApp from '../../../4 General Media-Info Recourses/01 Text/1.0 mainTextApp/mainTextApp';
const textPromotionSection = mainTextApp.textHomePage.textPromotionSection;

const PromotionSection = () => {
  return (
    <section className="promotion-section">
      <div className="general-container promotion-section__container a">
        <div className="promotion-section__promotion">
          <h2 className="promotion-section__titel-discont">{textPromotionSection.titel}</h2>
          <p className="promotion-section__titel-slogan">
            {textPromotionSection.slogan[0]} <br /> {textPromotionSection.slogan[1]}
          </p>
          <Timer deadline={'2024-11-18T00:00:00'} />
        </div>
        <ContactForm type={'callMeasure'} />
      </div>
    </section>
  );
};

export default PromotionSection;
