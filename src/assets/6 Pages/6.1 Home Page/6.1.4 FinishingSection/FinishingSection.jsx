import './FinishingSection.scss';

import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';

import mainFinishingData from '../../../4 General Media-Info Recourses/mainFinishingData';
import { useState } from 'react';
import { ifDotAddZeroToPrice } from '../../../1 Utilities/helperFunctions';

const FinishingSection = () => {
  const [displayMaterial, setDisplayMaterial] = useState(0);

  return (
    <section className="finishing-section">
      <div className="general-container finishing-section__container">
        <SectionHedar titel={'Order your balcony decoration with a 60% discount!'} />
        <FinishingBtns setDisplayMaterial={setDisplayMaterial} displayMaterial={displayMaterial} />
        <FinishingMaterial displayMaterial={displayMaterial} />
      </div>
    </section>
  );
};

const FinishingBtns = props => {
  return (
    <ul className="finishing-btns__list">
      {mainFinishingData.map((chapter, index) => {
        const btnClass =
          props.displayMaterial == index ? 'finishing-btns__btn finishing-btns__btn-active' : 'finishing-btns__btn';

        return (
          <li className="finishing-btns__item" key={index}>
            <button className={btnClass} onClick={() => props.setDisplayMaterial(index)}>
              {chapter.chapter}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const FinishingMaterial = props => {
  const { decorationImg, material } = mainFinishingData[props.displayMaterial];

  return (
    <div className="finishing-material">
      <div className="finishing-material__img">
        <img className="finishing-material__img-img" src={decorationImg} alt="decor img" />
      </div>

      <ul className="finishing-material__list">
        {material.map((material, i) => {
          return (
            <li className="finishing-material__item" key={i}>
              <img className="finishing-material__item-img" src={material.img} alt={material.name} />
              <h4 className="finishing-material__item-titel">{material.name}</h4>
              <p className="finishing-material__item-decrption">
                <span className="finishing-material__item-decrption-accent">$ {ifDotAddZeroToPrice(material.price)} sq. m</span>
                <br />
                with material
              </p>
            </li>
          );
        })}
      </ul>

      <ContactForm type={'callMeasure'} />
    </div>
  );
};

export default FinishingSection;
