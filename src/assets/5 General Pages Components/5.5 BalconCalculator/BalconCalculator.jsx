import './BalconCalculator.scss';
import { useState } from 'react';

import balkonIcon_1 from './resources/balkon/ba_01.png';
import balkonIcon_2 from './resources/balkon/ba_02.png';
import balkonIcon_3 from './resources/balkon/ba_03.png';
import balkonIcon_4 from './resources/balkon/ba_04.png';

const arrBalkonIcons = [balkonIcon_1, balkonIcon_2, balkonIcon_3, balkonIcon_4];

import balkonImg_1 from './resources/balkon/type1.png';
import balkonImg_2 from './resources/balkon/type2.png';
import balkonImg_3 from './resources/balkon/type3.png';
import balkonImg_4 from './resources/balkon/type4.png';

const arrBalkonImg = [balkonImg_1, balkonImg_2, balkonImg_3, balkonImg_4];

import coldIcon from './resources/icon_cold.png';
import warmIcon from './resources/icon_warm.png';
import ContactForm from '../5.1 ContactForm/ContactForm';

const BalconCalculator = props => {
  const textBalconCalculator = props.langugeApp.textGeneralPagesComponents.textBalconCalculator;
  const [formDisply, setFromDisplay] = useState('Balckon type');

  const [orderBalcon, setOrderBalcon] = useState({
    action: 'Customer order balcon',
    balkonType: 0,
    balkonWidth: '',
    balkonHeight: '',
    glazingType: 'Wooden glazing',
    profileType: '',
  });

  let displyForm;

  switch (formDisply) {
    case 'Balckon type':
      displyForm = (
        <BalconTypeForm
          setOrderBalcon={setOrderBalcon}
          orderBalcon={orderBalcon}
          setFromDisplay={setFromDisplay}
          textBalconCalculator={textBalconCalculator}
        />
      );
      break;
    case 'Balckon glazing & profile':
      displyForm = (
        <BalconGlazingProfileForm
          setOrderBalcon={setOrderBalcon}
          orderBalcon={orderBalcon}
          setFromDisplay={setFromDisplay}
          textBalconCalculator={textBalconCalculator}
        />
      );
      break;
    case 'Contact form':
      displyForm = (
        <ContactForm
          type={'orderOrderBalcon'}
          orderData={orderBalcon}
          setModalWindowState={props.setModalWindowState}
          setFromDisplayBalconCalculator={setFromDisplay}
          setOrderBalcon={setOrderBalcon}
          langugeApp={props.langugeApp}
        />
      );
      break;
  }

  return <div className="balkon-calculator__container">{displyForm}</div>;
};

const BalconTypeForm = props => {
  const displayNextForm = e => {
    e.preventDefault();
    props.setFromDisplay('Balckon glazing & profile');
  };

  return (
    <div className="balkon-type">
      <h2 className="balkon-type__titel">{props.textBalconCalculator.balkonType.titel.one}</h2>
      <p className="balkon-type__slogon">{props.textBalconCalculator.balkonType.titel.two}</p>
      <ul className="balkon-type__icon-list">
        {arrBalkonIcons.map((icons, index) => {
          return (
            <li
              className={props.orderBalcon.balkonType == index ? 'balkon-type__icon-item-active' : 'balkon-type__icon-item'}
              onClick={() =>
                props.setOrderBalcon(orderBalcon => {
                  return { ...orderBalcon, balkonType: index };
                })
              }
              key={index}
            >
              <img className="balkon-type__icon-img" src={icons} alt="balkon icon" />
            </li>
          );
        })}
      </ul>
      <img className="balkon-type__main-img" src={arrBalkonImg[props.orderBalcon.balkonType]} alt="Balkon type img" />
      <form className="balkon-type__form">
        <div className="balkon-type__input-container">
          <label className="balkon-type__input-label">
            <input
              className="balkon-type__input"
              name="balkonWidth"
              type="number"
              placeholder={props.textBalconCalculator.balkonType.placeholderWidth}
              value={props.orderBalcon.balkonWidth}
              onChange={e =>
                props.setOrderBalcon(orderBalcon => {
                  return { ...orderBalcon, [e.target.name]: +e.target.value };
                })
              }
            />
            {props.textBalconCalculator.balkonType.millimeters}
          </label>

          <span className="balkon-type__input-label-extra">x</span>

          <label className="balkon-type__input-label">
            <input
              className="balkon-type__input"
              name="balkonHeight"
              type="number"
              placeholder={props.textBalconCalculator.balkonType.placeholderHeight}
              onChange={e =>
                props.setOrderBalcon(orderBalcon => {
                  return { ...orderBalcon, [e.target.name]: +e.target.value };
                })
              }
            />
            {props.textBalconCalculator.balkonType.millimeters}
          </label>
        </div>
        <p className="balkon-type__info-text"></p>
        <button onClick={e => displayNextForm(e)} className="balkon-type__btn">
          {props.textBalconCalculator.balkonType.btnNext}
        </button>
      </form>
    </div>
  );
};

const BalconGlazingProfileForm = props => {
  const displayNextForm = e => {
    e.preventDefault();
    props.setFromDisplay('Contact form');
  };

  return (
    <div className="balkon-profile">
      <h2 className="balkon-profile__titel">{props.textBalconCalculator.balkonProfile.titel.one}</h2>
      <p className="balkon-profile__slogon">{props.textBalconCalculator.balkonProfile.titel.two}</p>
      <form className="balkon-profile__form">
        <select
          className="balkon-profile__select"
          name="glazingType"
          value={props.orderBalcon.glazingType}
          onChange={e =>
            props.setOrderBalcon(orderBalcon => {
              return { ...orderBalcon, [e.target.name]: e.target.value };
            })
          }
        >
          <option value="Wooden">{props.textBalconCalculator.balkonProfile.options[0]}</option>
          <option value="Aluminum">{props.textBalconCalculator.balkonProfile.options[1]}</option>
          <option value="Glazing with plastic frames">{props.textBalconCalculator.balkonProfile.options[2]}</option>
          <option value="Panoramic">{props.textBalconCalculator.balkonProfile.options[3]}</option>
          <option value="Glazing with extension">{props.textBalconCalculator.balkonProfile.options[4]}</option>
        </select>

        <img className="balkon-profile__img-profile" src={coldIcon} alt="icon cold" />

        <div className="balkon-profile__radio-container">
          <input
            className="balkon-profile__radio"
            type="radio"
            name="profileType"
            id="cold"
            onChange={e =>
              props.setOrderBalcon(orderBalcon => {
                return { ...orderBalcon, [e.target.name]: e.target.id };
              })
            }
          />
          <p className="balkon-profile__radio-titel">{props.textBalconCalculator.balkonProfile.radioTitel.cold}</p>
        </div>

        <img className="balkon-profile__img-profile" src={warmIcon} alt="icon warm" />

        <div className="balkon-profile__radio-container">
          <input
            className="balkon-profile__radio"
            type="radio"
            name="profileType"
            id="warm"
            onChange={e =>
              props.setOrderBalcon(orderBalcon => {
                return { ...orderBalcon, [e.target.name]: e.target.id };
              })
            }
          />

          <p className="balkon-profile__radio-titel">{props.textBalconCalculator.balkonProfile.radioTitel.warm}</p>
        </div>

        <p className="balkon-profile__info-text"></p>
        <button onClick={e => displayNextForm(e)} className="balkon-profile__btn">
          {props.textBalconCalculator.balkonProfile.btnNext}
        </button>
      </form>
    </div>
  );
};

export default BalconCalculator;
