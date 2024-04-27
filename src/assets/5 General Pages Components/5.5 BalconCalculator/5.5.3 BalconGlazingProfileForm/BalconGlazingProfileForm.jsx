import './BalconGlazingProfileForm.scss';

import { useState, useEffect } from 'react';
import coldIcon from './resources/icon_cold.png';
import warmIcon from './resources/icon_warm.png';

const BalconGlazingProfileForm = props => {
  const { setOrderBalcon, orderBalcon, setFromDisplay, textBalconCalculator } = props;

  const [nextBtnState, setNextBtntState] = useState(false);
  const [infoMessGlazingType, setInfoMessGlazingType] = useState(false);
  const [infoMessProfillType, setInfoMessProfillType] = useState(false);

  const checkingForm = () => {
    if (orderBalcon.glazingType == '') {
      setInfoMessGlazingType(true);
      setNextBtntState(true);
    } else {
      setInfoMessGlazingType(false);
      setNextBtntState(false);
    }

    if (orderBalcon.profileType == '') {
      setInfoMessProfillType(true);
      setNextBtntState(true);
    } else {
      setInfoMessProfillType(false);
      setNextBtntState(false);
    }
  };

  const displayNextForm = () => {
    if (orderBalcon.glazingType != '' && orderBalcon.profileType != '') {
      setFromDisplay('Contact form');
    } else {
      checkingForm();
    }
  };

  useEffect(() => {
    if (nextBtnState) {
      checkingForm();
    }
  }, [orderBalcon]);

  return (
    <>
      <h2 className="balkon-profile__titel">{textBalconCalculator.balkonProfile.titel.one}</h2>
      <p className="balkon-profile__slogon">{textBalconCalculator.balkonProfile.titel.two}</p>
      <form className="balkon-profile__form">
        <select
          className="balkon-profile__select"
          name="glazingType"
          value={orderBalcon.glazingType}
          onChange={e =>
            setOrderBalcon(orderBalcon => {
              return { ...orderBalcon, [e.target.name]: e.target.value };
            })
          }
        >
          <option value="">{textBalconCalculator.balkonProfile.options[0]}</option>
          <option value="Wooden">{textBalconCalculator.balkonProfile.options[1]}</option>
          <option value="Aluminum">{textBalconCalculator.balkonProfile.options[2]}</option>
          <option value="Glazing with plastic frames">{textBalconCalculator.balkonProfile.options[3]}</option>
          <option value="Panoramic">{textBalconCalculator.balkonProfile.options[4]}</option>
          <option value="Glazing with extension">{textBalconCalculator.balkonProfile.options[5]}</option>
        </select>
        <p className="general-from-inform-message red-color" style={{ visibility: infoMessGlazingType ? 'visible' : 'hidden' }}>
          {textBalconCalculator.balkonProfile.infoMessGlazingType}
        </p>

        <img className="balkon-profile__img-profile" src={coldIcon} alt="icon cold" />

        <div className="balkon-profile__radio-container">
          <input
            className="balkon-profile__radio"
            type="radio"
            name="profileType"
            id="cold"
            checked={orderBalcon.profileType == 'cold' ? true : false}
            onChange={e =>
              setOrderBalcon(orderBalcon => {
                return { ...orderBalcon, [e.target.name]: e.target.id };
              })
            }
          />
          <p className="balkon-profile__radio-titel">{textBalconCalculator.balkonProfile.radioTitel.cold}</p>
        </div>

        <img className="balkon-profile__img-profile" src={warmIcon} alt="icon warm" />

        <div className="balkon-profile__radio-container">
          <input
            className="balkon-profile__radio"
            type="radio"
            name="profileType"
            id="warm"
            checked={orderBalcon.profileType == 'warm' ? true : false}
            onChange={e =>
              setOrderBalcon(orderBalcon => {
                return { ...orderBalcon, [e.target.name]: e.target.id };
              })
            }
          />

          <p className="balkon-profile__radio-titel">{textBalconCalculator.balkonProfile.radioTitel.warm}</p>
        </div>

        <p className="general-from-inform-message red-color" style={{ visibility: infoMessProfillType ? 'visible' : 'hidden' }}>
          {textBalconCalculator.balkonProfile.infoMessProfilType}
        </p>
        <button
          className="balkon-profile__btn"
          type="button"
          style={{ marginTop: '15px' }}
          disabled={nextBtnState}
          onClick={() => displayNextForm()}
        >
          {textBalconCalculator.balkonProfile.btnNext}
        </button>
      </form>
    </>
  );
};

export default BalconGlazingProfileForm;
