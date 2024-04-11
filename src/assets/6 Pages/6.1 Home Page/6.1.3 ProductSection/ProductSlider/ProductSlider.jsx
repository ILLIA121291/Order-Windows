import './ProductSlider.scss';
import { useState } from 'react';

import woodWindows from '../resources/icons/1.png';
import aluminumWindows from '../resources/icons/2.png';
import plasticWindows from '../resources/icons/3.png';
import panoramicWindows from '../resources/icons/4.png';
import takeOutWindows from '../resources/icons/5.png';

const arrWindows = [
  { titel: 'Wood Windows', img: woodWindows },
  { titel: 'Aluminum Windows', img: aluminumWindows },
  { titel: 'Plastic Windows', img: plasticWindows },
  { titel: 'Panoramic Windows', img: panoramicWindows },
  { titel: 'Take out Windows', img: takeOutWindows },
  { titel: 'Wood Windows', img: woodWindows },
  { titel: 'Aluminum Windows', img: aluminumWindows },
  { titel: 'Plastic Windows', img: plasticWindows },
  { titel: 'Panoramic Windows', img: panoramicWindows },
  { titel: 'Take out Windows', img: takeOutWindows },
  { titel: 'Wood Windows', img: woodWindows },
  { titel: 'Aluminum Windows', img: aluminumWindows },
  { titel: 'Plastic Windows', img: plasticWindows },
  { titel: 'Panoramic Windows', img: panoramicWindows },
  { titel: 'Take out Windows', img: takeOutWindows },
];

const ProductSlider = () => {
  const arrImg = arrWindows;
  const widthWindowSlider = 193;

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

  const imgsDisplay = arrImg.map((window, index) => {
    return (
      <li key={index} className="slider_window_slides_img_line_slide product-category__item">
        <button className="product-category__item-btn">
          <img className="product-category__item-img" src={window.img} alt="" />
          <h3 className="product-category__item-titel">{window.titel}</h3>
        </button>
      </li>
    );
  });

  return (
    <div className="slider">
      <button
        className="slider_window_change_btns slider_btn_previous_slide"
        onClick={() => {
          previousSlide();
        }}
      >
        <span className="slider_btn_previous_slide_img"></span>
      </button>
      <div className="slider_window">
        <ul className="slider_window_slides_img_line" style={{ transform: `translateX(-${offset}px)` }}>
          {imgsDisplay}
        </ul>
      </div>
      <button
        className="slider_window_change_btns slider_btn_next_slide"
        onClick={() => {
          nextSlide();
        }}
      >
        <span className="slider_btn_next_slide_img"></span>
      </button>
    </div>
  );
};

export default ProductSlider;
