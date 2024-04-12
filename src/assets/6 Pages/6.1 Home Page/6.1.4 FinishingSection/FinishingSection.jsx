import './FinishingSection.scss';

import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';

import decorImg from './resources/decoration_img.png';
import liningImg from './resources/material/lining.png';
import plasticLiningImg from './resources/material/plastic.png';
import pvsPanelsImg from './resources/material/pvh.png';
import laminateFlooringImg from './resources/material/laminate.png';
import woodFlooringImg from './resources/material/tree.png';

const arrMaterial = [
  { material: 'Lining', img: liningImg, price: 6 },
  { material: 'Plastic lining', img: plasticLiningImg, price: 7.5 },
  { material: 'PVC panels', img: pvsPanelsImg, price: 8 },
  { material: 'Laminate flooring', img: laminateFlooringImg, price: 12.5 },
  { material: 'Wood flooring', img: woodFlooringImg, price: 16.5 },
];

const FinishingSection = () => {
  return (
    <section className="finishing-section">
      <div className="general-container finishing-section__container">
        <SectionHedar titel={'Order your balcony decoration with a 60% discount!'} />
        <FinishingAccordion />
        <FinishingMaterial />
      </div>
    </section>
  );
};

const FinishingAccordion = () => {
  return (
    <div className="finishing-accordion">
      <ul className="finishing-accordion__list">
        <li className="finishing-accordion__item">interior decoration</li>
        <li className="finishing-accordion__item">external finishing</li>
        <li className="finishing-accordion__item">facade glazing</li>
        <li className="finishing-accordion__item">roof on the balcony</li>
      </ul>
    </div>
  );
};

const FinishingMaterial = () => {
  return (
    <div className="finishing-material">
      <div className="finishing-material__img">
        <img className="finishing-material__img-img" src={decorImg} alt="decor img" />
      </div>
      <ul className="finishing-material__list">
        {arrMaterial.map((material, i) => {
          return (
            <li className="finishing-material__item" key={i}>
              <img className="finishing-material__item-img" src={material.img} alt={material.material} />
              <h4 className="finishing-material__item-titel">{material.material}</h4>
              <p className="finishing-material__item-decrption">
                <span className="finishing-material__item-decrption-accent">${material.price} sq. m</span>
                <br />
                with material
              </p>
            </li>
          );
        })}
      </ul>
      <ContactForm type={'callMeasure'}/>
    </div>
  );
};

export default FinishingSection;
