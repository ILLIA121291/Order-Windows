import './FinishingSection.scss';

import ContactForm from '../../../5 General Pages Components/5.1 ContactForm/ContactForm';
import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';

import { useState } from 'react';
import mainFinishingData from '../../../4 General Media-Info Recourses/02 mainDataApp/mainFinishingData';
import useDisplayPriceInCurrency from '../../../1 Utilities/useDisplayPriceInCurrency';

const FinishingSection = props => {
  const textFinishingSection = props.langugeApp.textHomePage.textFinishingSection;
  const [displayMaterialGroup, setDisplayMaterialGroup] = useState(0);

  return (
    <section className="finishing-section">
      <div className="general-container finishing-section__container">
        <SectionHedar titel={textFinishingSection.titel} />
        <FinishingBtns
          setDisplayMaterialGroup={setDisplayMaterialGroup}
          displayMaterialGroup={displayMaterialGroup}
          textFinishingSection={textFinishingSection}
        />
        <FinishingMaterial
          displayMaterialGroup={displayMaterialGroup}
          textFinishingSection={textFinishingSection}
          langugeApp={props.langugeApp}
          currencyApp={props.currencyApp}
          setModalWindowState={props.setModalWindowState}
        />
      </div>
    </section>
  );
};

const FinishingBtns = props => {
  return (
    <ul className="finishing-btns__list">
      {props.textFinishingSection.material.map((material, index) => {
        const btnClass =
          props.displayMaterialGroup == index ? 'finishing-btns__btn finishing-btns__btn-active' : 'finishing-btns__btn';

        return (
          <li className="finishing-btns__item" key={index}>
            <button className={btnClass} onClick={() => props.setDisplayMaterialGroup(index)}>
              {material.chapterName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const FinishingMaterial = props => {
  const { decorationImg, material } = mainFinishingData[props.displayMaterialGroup];
  const { materialNames } = props.textFinishingSection.material[props.displayMaterialGroup];

  return (
    <div className="finishing-material">
      <div className="finishing-material__img">
        <img className="finishing-material__img-img" src={decorationImg} alt="decor img" />
      </div>

      <ul className="finishing-material__list">
        {material.map((material, i) => {
          return (
            <li
              className="finishing-material__item"
              key={i}
              onClick={() =>
                props.setModalWindowState({
                  component: 'FinishingMaterialCalculator',
                  componentType: {
                    materialGroup: props.displayMaterialGroup,
                    materialNumber: i,
                  },
                  display: true,
                  closeOverlay: true,
                  closeEscapeBtn: true,
                })
              }
            >
              <img className="finishing-material__item-img" src={material.img} alt={material.name} />
              <h4 className="finishing-material__item-titel">{materialNames[i].name}</h4>
              <p className="finishing-material__item-decrption">
                <span className="finishing-material__item-decrption-accent">
                  {useDisplayPriceInCurrency(props.currencyApp, material.price)} {props.currencyApp}{' '}
                  {props.textFinishingSection.sqm}
                </span>
                <br />
                {props.textFinishingSection.withMaterial}
              </p>
            </li>
          );
        })}
      </ul>

      <ContactForm type={'callMeasure'} langugeApp={props.langugeApp} />
    </div>
  );
};

export default FinishingSection;
