import './BalconTypeForm.scss';

import { useEffect, useState } from 'react';
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

const BalconTypeForm = props => {
  const { setOrderBalcon, orderBalcon, setFromDisplay, textBalconCalculator } = props;

  const [nextBtnState, setNextBtnState] = useState(false);

  const displayNextForm = e => {
    e.preventDefault();

    if (orderBalcon.balkonWidth != '' && orderBalcon.balkonHeight != '') {
      setFromDisplay('Balckon glazing & profile');
    } else {
      setNextBtnState(true);
    }
  };

  useEffect(() => {
    if (nextBtnState) {
      if (orderBalcon.balkonWidth != '' && orderBalcon.balkonHeight != '') {
        setNextBtnState(false);
      } else {
        setNextBtnState(true);
      }
    }
  }, [orderBalcon]);

  return (
    <>
      <h2 className="balkon-type__titel">{textBalconCalculator.balkonType.titel.one}</h2>
      <p className="balkon-type__slogon">{textBalconCalculator.balkonType.titel.two}</p>
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
      <div className="balkon-type__main-img-container">
        <img className="balkon-type__main-img" src={arrBalkonImg[orderBalcon.balkonType]} alt="Balkon type img" />
      </div>
      <form className="balkon-type__form">
        <div className="balkon-type__input-container">
          <label className="balkon-type__input-label">
            <input
              className="balkon-type__input"
              name="balkonWidth"
              type="number"
              placeholder={textBalconCalculator.balkonType.placeholderWidth}
              value={orderBalcon.balkonWidth}
              onChange={e =>
                setOrderBalcon(orderBalcon => {
                  return { ...orderBalcon, [e.target.name]: +e.target.value };
                })
              }
            />
            {textBalconCalculator.balkonType.millimeters}
          </label>

          <span className="balkon-type__input-label-extra">x</span>

          <label className="balkon-type__input-label">
            <input
              className="balkon-type__input"
              name="balkonHeight"
              type="number"
              placeholder={textBalconCalculator.balkonType.placeholderHeight}
              value={orderBalcon.balkonHeight}
              onChange={e =>
                setOrderBalcon(orderBalcon => {
                  return { ...orderBalcon, [e.target.name]: +e.target.value };
                })
              }
            />
            {textBalconCalculator.balkonType.millimeters}
          </label>
        </div>
        <p className="general-from-inform-message red-color" style={{ visibility: nextBtnState ? 'visible' : 'hidden' }}>
          {textBalconCalculator.balkonType.infoMessSizeBalkon}
        </p>
        <button
          className="balkon-type__btn"
          type="button"
          style={{ marginTop: '15px' }}
          disabled={nextBtnState}
          onClick={e => displayNextForm(e)}
        >
          {textBalconCalculator.balkonType.btnNext}
        </button>
      </form>
    </>
  );
};

export default BalconTypeForm;
