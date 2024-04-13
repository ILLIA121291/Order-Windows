import { useState } from 'react';
import './BalconCalculator.scss';

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
      displyForm = <BalconTypeForm setOrderBalcon={setOrderBalcon} orderBalcon={orderBalcon} setFromDisplay={setFromDisplay} />;
      break;
    case 'Balckon glazing & profile':
      displyForm = (
        <BalconGlazingProfileForm setOrderBalcon={setOrderBalcon} orderBalcon={orderBalcon} setFromDisplay={setFromDisplay} />
      );
      break;
    case 'Contact form':
      displyForm = (
        <ContactForm
          type={'callMeasure'}
          orderData={orderBalcon}
          setModalWindowState={props.setModalWindowState}
          setFromDisplayBalconCalculator={setFromDisplay}
          setOrderBalcon={setOrderBalcon}
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
      <h2 className="balkon-type__titel">Calculator</h2>
      <p className="balkon-type__slogon">Select the shape of the balcony and indicate the dimensions</p>
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
              placeholder="Width"
              value={props.orderBalcon.balkonWidth}
              onChange={e =>
                props.setOrderBalcon(orderBalcon => {
                  return { ...orderBalcon, [e.target.name]: +e.target.value };
                })
              }
            />
            mm
          </label>

          <span className="balkon-type__input-label-extra">x</span>

          <label className="balkon-type__input-label">
            <input
              className="balkon-type__input"
              name="balkonHeight"
              type="number"
              placeholder="Height"
              onChange={e =>
                props.setOrderBalcon(orderBalcon => {
                  return { ...orderBalcon, [e.target.name]: +e.target.value };
                })
              }
            />
            mm
          </label>
        </div>
        <p className="balkon-type__info-text"></p>
        <button onClick={e => displayNextForm(e)} className="balkon-type__btn">
          Next
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
      <h2 className="balkon-profile__titel">Calculator</h2>
      <p className="balkon-profile__slogon">Select the type of glazing and its profile</p>
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
          <option value="Wooden glazing">Wooden glazing</option>
          <option value="Aluminum glazing">Aluminum glazing</option>
          <option value="Glazing with plastic frames">Glazing with plastic frames</option>
          <option value="Panoramic glazing">Panoramic glazing</option>
          <option value="Glazing with extension">Glazing with extension</option>
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
          <p className="balkon-profile__radio-titel">Cold</p>
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

          <p className="balkon-profile__radio-titel">Warm</p>
        </div>

        <p className="balkon-profile__info-text"></p>
        <button onClick={e => displayNextForm(e)} className="balkon-profile__btn">
          Next
        </button>
      </form>
    </div>
  );
};

export default BalconCalculator;
