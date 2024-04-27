import './PromotionSection.scss';
import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import Timer from '../../../5 General Pages Components/5.2 Timer/Timer';

const PromotionSection = props => {
  const textPromotionSection = props.langugeApp.textHomePage.textPromotionSection;

  return (
    <section className="promotion-section">
      <div className="general-container promotion-section__container a">
        <div className="promotion-section__promotion">
          <h2 className="promotion-section__titel-discont">{textPromotionSection.titel}</h2>
          <p className="promotion-section__titel-slogan">
            {textPromotionSection.slogan[0]} <br /> {textPromotionSection.slogan[1]}
          </p>
          <Timer deadline={'2024-11-18T00:00:00'} langugeApp={props.langugeApp} />
        </div>
        <div className="promotion-section__contact-form">
          <ContactForm type={'callMeasure'} langugeApp={props.langugeApp} />
        </div>
      </div>
      <div className="general-container promotion-section__mobile-contact-from">
        <ContactForm type={'callMeasure'} langugeApp={props.langugeApp} />
      </div>
    </section>
  );
};

export default PromotionSection;
