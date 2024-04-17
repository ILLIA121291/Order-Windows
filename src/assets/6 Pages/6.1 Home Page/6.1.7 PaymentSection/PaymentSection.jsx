import './PaymentSection.scss';
import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';

import cashImg from './resources/img/wallet.png';
import cardImg from './resources/img/credit-card.png';
import bankImg from './resources/img/museum.png';

const arrPaymentImg = [cashImg, cardImg, bankImg];

const PaymentSection = props => {
  const textPaymentSection = props.langugeApp.textHomePage.textPaymentSection;

  return (
    <section>
      <div className="general-container payment-section__container">
        <SectionHedar titel={textPaymentSection.titel} />
        <ul className="payment-section__list">
          {arrPaymentImg.map((img, index) => {
            return (
              <li className="payment-section__item" key={index}>
                <img className="payment-section__img" src={img} alt={textPaymentSection.paymentTitels[index]} />
                <h4 className="payment-section__titel">{textPaymentSection.paymentTitels[index]}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PaymentSection;
