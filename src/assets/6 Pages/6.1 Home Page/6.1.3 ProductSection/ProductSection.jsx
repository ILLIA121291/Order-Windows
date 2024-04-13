import './ProductSection.scss';

import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';

import ProductSlider from './ProductSlider/ProductSlider';
import { useState } from 'react';

import mainProductsData from '../../../4 General Media-Info Recourses/mainProductsData';

const ProductSection = props => {
  const [displayTab, setDisplayTab] = useState(0);

  return (
    <section className="product-section">
      <div className="general-container product-section__container">
        <SectionHedar titel={'Glazing of balconies and loggias'} />
        <ProductSlider setDisplayTab={setDisplayTab} displayTab={displayTab} />
        <ProductDemo displayTab={displayTab} setModalWindowState={props.setModalWindowState} />
      </div>
    </section>
  );
};

const ProductDemo = props => {
  return (
    <div className="product-demo">
      {mainProductsData[props.displayTab].tabs.map((tab, index) => {
        const { titel, img, description, price } = tab;
        const bdColor = index == 0 ? 'product-demo__product-cold' : 'product-demo__product-warm';
        const titelColor = index == 0 ? 'product-demo__titel-cold' : 'product-demo__titel-warm';

        return (
          <div className={`product-demo__product ${bdColor}`} key={index}>
            <h4 className={`product-demo__titel ${titelColor}`}>{titel}</h4>
            <img className="product-demo__img" src={img} alt={titel} />
            <ul className="product-demo__list">
              {description.map((value, index) => {
                return (
                  <li className="product-demo__list-item" key={index}>
                    {value}
                  </li>
                );
              })}
            </ul>
            <div className="product-demo__calculate">
              <p className="product-demo__calculate-titel">
                <span className="product-demo__calculate-titel-accent">${price} sq.m.</span>
                <br />
                turnkey with installation
              </p>
              <button
                className="product-demo__calculate-btn"
                onClick={() =>
                  props.setModalWindowState(modalWindowState => {
                    return { ...modalWindowState, component: 'BalconCalculator', closeOverlay: false, display: true };
                  })
                }
              >
                CALCULATE PRICE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSection;
