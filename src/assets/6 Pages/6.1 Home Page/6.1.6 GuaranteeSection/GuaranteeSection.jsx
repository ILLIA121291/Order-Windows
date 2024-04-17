import './GuaranteeSection.scss';

import Img_1 from './resources/img/1.png';
import Img_2 from './resources/img/2.png';
import Img_3 from './resources/img/3.png';
import Img_4 from './resources/img/4.png';
import Img_5 from './resources/img/5.png';
import Img_6 from './resources/img/6.png';

const arrImg = [Img_1, Img_2, Img_3, Img_4, Img_5, Img_6];

const GuaranteeSection = props => {
  const textGuaranteeSection = props.langugeApp.textHomePage.textGuaranteeSection;
  return (
    <section className="guarantee-section">
      <div className="general-container  guarantee-section__container">
        <GuaranteeHeader textGuaranteeSection={textGuaranteeSection} />
        <ul className="guarantee-section__list">
          {arrImg.map((img, i) => {
            return (
              <li className="guarantee-section__item" key={i}>
                <img className="guarantee-section__item-img" src={img} alt={textGuaranteeSection.titelsSmall[i]} />
                <p className="guarantee-section__item-titel">{textGuaranteeSection.titelsSmall[i]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const GuaranteeHeader = props => {
  return (
    <header className="guarantee-section__header">
      <h2 className="guarantee-section__header-titel">{props.textGuaranteeSection.titel}</h2>
      <div className="guarantee-section__header-decor"></div>
    </header>
  );
};

export default GuaranteeSection;
