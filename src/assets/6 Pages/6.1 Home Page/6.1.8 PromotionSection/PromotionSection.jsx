import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import Timer from '../../../5 General Pages Components/5.2 Timer/Timer';
import './PromotionSection.scss';

const PromotionSection = () => {
  return (
    <section className="promotion-section">
      <div className="general-container promotion-section__container a">
        <div className="promotion-section__promotion">
          <h2 className="promotion-section__titel-discont">promotion - 60%</h2>
          <h2 className="promotion-section__titel-slogan">
            Hurry up to save on glazing! <br /> Only until December 18th!
          </h2>
          <Timer deadline={'2024-11-18T00:00:00'} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default PromotionSection;
