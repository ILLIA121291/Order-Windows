import './ProductSlider.scss';
import { useState } from 'react';

import mainProductsData from '../../../../4 General Media-Info Recourses/02 mainDataApp/mainProductsData';

const ProductSlider = props => {
  const arrSlides = mainProductsData.slice(1);
  const widthWindowSlider = 150;

  const [offset, setOffset] = useState(0);

  const sliderWindowWidth = document.documentElement.clientWidth;

  let notDisplaySlides;

  if (sliderWindowWidth >= 400 && sliderWindowWidth <= 519) {
    notDisplaySlides = 3;
  }

  if (sliderWindowWidth >= 520 && sliderWindowWidth <= 599) {
    notDisplaySlides = 2;
  }

  if (sliderWindowWidth >= 670 && sliderWindowWidth <= 799) {
    notDisplaySlides = 1;
  }

  const [slidesNotDisplay, setSlidesNotDisplay] = useState(notDisplaySlides);

  const previousSlide = () => {
    if (offset === 0) {
      setOffset(offset => 0);
    } else {
      setOffset(offset => (offset -= widthWindowSlider));
      setSlidesNotDisplay(slidesNotDisplay => (slidesNotDisplay += 1));
    }
  };

  const nextSlide = () => {
    if (slidesNotDisplay > 0) {
      setOffset(offset => (offset += widthWindowSlider));
      setSlidesNotDisplay(slidesNotDisplay => (slidesNotDisplay -= 1));
    }
  };

  const slidesDisplay = arrSlides.map((product, index) => {
    const activeProduct = props.displayTab == index + 1 ? 'slider-window__item-titel-active' : 'slider-window__item-titel';

    return (
      <li key={index} className="slider-window__item">
        <button className="slider-window__item-btn" onClick={() => props.setDisplayTab(index + 1)}>
          <img className="slider-window__item-img" src={product.icons} alt="" />
          <h3 className={activeProduct}>{props.textProductSection.products[index + 1].productName}</h3>
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
          {slidesDisplay}
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
