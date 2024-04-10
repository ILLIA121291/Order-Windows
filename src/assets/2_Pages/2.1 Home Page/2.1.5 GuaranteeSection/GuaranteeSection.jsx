import SectionHedar from '../../../1_Components/1.4 SectionHedar/SectionHedar';
import './GuaranteeSection.scss';

import Img_1 from './resources/img/1.png';
import Img_2 from './resources/img/2.png';
import Img_3 from './resources/img/3.png';
import Img_4 from './resources/img/4.png';
import Img_5 from './resources/img/5.png';
import Img_6 from './resources/img/6.png';

const arrImg = [
  { img: Img_1, titel: 'High quality' },
  { img: Img_2, titel: 'Turnkey work' },
  { img: Img_3, titel: 'Installation in short lines' },
  { img: Img_4, titel: 'Price from the manufacturer' },
  { img: Img_5, titel: 'Free measurement and consultation' },
  { img: Img_6, titel: 'Warmth and comfort on the balcony' },
];

const GuaranteeSection = () => {
  return (
    <section className="guarantee-section">
      <div className="general-container  guarantee-section__container">
        <GuaranteeHeader />
        <ul className="guarantee-section__list">
          {arrImg.map((img, i) => {
            return (
              <li className="guarantee-section__item">
                <img className="guarantee-section__item-img" src={img.img} alt={img.titel} />
                <h4 className="guarantee-section__item-titel">{img.titel}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const GuaranteeHeader = () => {
  return (
    <header className="guarantee-section__header">
      <h2 className="guarantee-section__header-titel">We guarantee you</h2>
      <div className="guarantee-section__header-decor"></div>
    </header>
  );
};

export default GuaranteeSection;
