import './ProductSlider.scss';
import { useState } from 'react';

import mainProductsData from '../../../../4 General Media-Info Recourses/01 Text/1.1 English/1.1.7 mainProductsData';

const ProductSlider = props => {
  const arrImg = mainProductsData.slice(1);
  const widthWindowSlider = 170;

  const [offset, setOffset] = useState(0);

  const nextSlide = () => {
    if (offset === widthWindowSlider * (arrImg.length - 5)) {
      setOffset(offset => widthWindowSlider * (arrImg.length - 5));
    } else {
      setOffset(offset => (offset += widthWindowSlider));
    }
  };

  const previousSlide = () => {
    if (offset === 0) {
      setOffset(offset => 0);
    } else {
      setOffset(offset => (offset -= widthWindowSlider));
    }
  };

  const imgsDisplay = arrImg.map((product, index) => {
    const activeProduct = props.displayTab == index + 1 ? 'slider-window__item-titel-active' : 'slider-window__item-titel';

    return (
      <li key={index} className="slider-window__item">
        <button className="slider-window__item-btn" onClick={() => props.setDisplayTab(index + 1)}>
          <img className="slider-window__item-img" src={product.icons} alt="" />
          <h3 className={activeProduct}>{product.product}</h3>
        </button>
      </li>
    );
  });

  return (
    <div className="slider">
      <button
        className="slider__change-btns slider-btn__previous-slide"
        onClick={() => {
          previousSlide();
        }}
      >
        <span className="slider-btn__previous-slide-img"></span>
      </button>
      <div className="slider-window">
        <ul className="slider-window__list" style={{ transform: `translateX(-${offset}px)` }}>
          {imgsDisplay}
        </ul>
      </div>
      <button
        className="slider__change-btns slider-btn__next-slide"
        onClick={() => {
          nextSlide();
        }}
      >
        <span className="slider-btn__next-slide-img"></span>
      </button>
    </div>
  );
};

export default ProductSlider;
