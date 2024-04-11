import './ProductSection.scss';

import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';

import cold from './resources/img_cold.png';
import warm from './resources/img_warm.png';
import ProductSlider from './ProductSlider/ProductSlider';

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="general-container product-section__container">
        <SectionHedar titel={'Glazing of balconies and loggias'} />
        <ProductSlider />
        <ProductDemo />
      </div>
    </section>
  );
};

const ProductDemo = () => {
  return (
    <div className="product-demo">
      <div className="product-demo__product product-demo__product-cold">
        <h4 className="product-demo__titel product-demo__titel-cold">COLD</h4>
        <img className="product-demo__img" src={cold} alt="cold" />
        <ul className="product-demo__list">
          <li className="product-demo__list-item">Structural thickness 42-58 mm</li>
          <li className="product-demo__list-item">Glazing: polished glass (4 - 5 mm thick)</li>
          <li className="product-demo__list-item">
            Thermal insulation: 0.07 m<sup>2</sup> * C/W
          </li>
          <li className="product-demo__list-item">Sound insulation: 20-27 dB</li>
        </ul>
        <div className="product-demo__calculate">
          <p className="product-demo__calculate-titel">
            <span className="product-demo__calculate-titel-accent">$25 sq.m.</span>
            <br />
            turnkey with installation
          </p>
          <button className="product-demo__calculate-btn">CALCULATE PRICE</button>
        </div>
      </div>
      <div className="product-demo__product product-demo__product-warm">
        <h4 className="product-demo__titel product-demo__titel-warm">WARM</h4>
        <img className="product-demo__img" src={warm} alt="cold" />
        <ul className="product-demo__list">
          <li className="product-demo__list-item">Structural profile thickness: 58-78 m</li>
          <li className="product-demo__list-item">Glazing: single-chamber and double-glazed windows</li>
          <li className="product-demo__list-item">
            Thermal insulation: 0.63 - 1.05 m<sup>2</sup> * C/W
          </li>
          <li className="product-demo__list-item">Sound insulation: up to class 5</li>
        </ul>
        <div className="product-demo__calculate">
          <p className="product-demo__calculate-titel">
            <span className="product-demo__calculate-titel-accent">$40 sq.m.</span>
            <br />
            turnkey with installation
          </p>
          <button className="product-demo__calculate-btn">CALCULATE PRICE</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
