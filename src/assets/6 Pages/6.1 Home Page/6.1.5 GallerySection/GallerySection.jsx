import './GallerySection.scss';
import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';
import mainTextApp from '../../../4 General Media-Info Recourses/01 Text/1.0 mainTextApp/mainTextApp';
const textGallerySection = mainTextApp.textHomePage.textGallerySection;

import imgSmall_1 from './resources/img/1.png';
import imgSmall_2 from './resources/img/2.png';
import imgSmall_3 from './resources/img/3.png';
import imgSmall_4 from './resources/img/4.png';
import imgSmall_5 from './resources/img/5.png';
import imgSmall_6 from './resources/img/6.png';
import imgSmall_7 from './resources/img/7.png';
import imgSmall_8 from './resources/img/8.png';

const arrImgsSmall = [imgSmall_1, imgSmall_2, imgSmall_3, imgSmall_4, imgSmall_5, imgSmall_6, imgSmall_7, imgSmall_8];

import imgZoom from './resources/img/zoom-in.png';

import imgBit_1 from './resources/img/big_img/1.png';
import imgBit_2 from './resources/img/big_img/2.png';
import imgBit_3 from './resources/img/big_img/3.png';
import imgBit_4 from './resources/img/big_img/4.png';
import imgBit_5 from './resources/img/big_img/5.png';
import imgBit_6 from './resources/img/big_img/6.png';
import imgBit_7 from './resources/img/big_img/7.png';
import imgBit_8 from './resources/img/big_img/8.png';

const arrImgsBig = [imgBit_1, imgBit_2, imgBit_3, imgBit_4, imgBit_5, imgBit_6, imgBit_7, imgBit_8];

const GallerySection = props => {
  const onMouseOverImg = e => {
    if (e.target && e.target.closest('.gallery-section__list') && e.target.classList.contains('gallery-section__img')) {
      e.target.nextElementSibling.classList.add('gallery-section__img-zoom-visible');
    }
  };

  const onMouseOutImg = e => {
    if (e.target && e.target.closest('.gallery-section__list') && e.target.classList.contains('gallery-section__img')) {
      e.target.nextElementSibling.classList.remove('gallery-section__img-zoom-visible');
    }
  };

  return (
    <section className="gallery-section">
      <div className="general-container">
        <SectionHedar titel={textGallerySection.titel} />
        <ul className="gallery-section__list" onMouseOver={e => onMouseOverImg(e)} onMouseOut={e => onMouseOutImg(e)}>
          {arrImgsSmall.map((img, index) => {
            return (
              <li
                className="gallery-section__item"
                onClick={() =>
                  props.setModalWindowState(modalWindowState => {
                    return {
                      ...modalWindowState,
                      component: 'DisplayImage',
                      componentType: arrImgsBig[index],
                      display: true,
                    };
                  })
                }
                key={index}
              >
                <img className="gallery-section__img" src={img} alt="" />
                <img className="gallery-section__img-zoom" src={imgZoom} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default GallerySection;
