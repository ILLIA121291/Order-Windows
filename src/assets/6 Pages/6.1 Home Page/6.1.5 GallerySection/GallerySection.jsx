import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';
import './GallerySection.scss';

import img_1 from './resources/img/1.png';
import img_2 from './resources/img/2.png';
import img_3 from './resources/img/3.png';
import img_4 from './resources/img/4.png';
import img_5 from './resources/img/5.png';
import img_6 from './resources/img/6.png';
import img_7 from './resources/img/7.png';
import img_8 from './resources/img/8.png';

const arrImgs = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="general-container">
        <SectionHedar titel={'Our works'} />
        <ul className="gallery-section__list">
          {arrImgs.map((img, i) => {
            return (
              <li className="gallery-section__item" key={i}>
                <img className="gallery-section__img" src={img} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default GallerySection;
