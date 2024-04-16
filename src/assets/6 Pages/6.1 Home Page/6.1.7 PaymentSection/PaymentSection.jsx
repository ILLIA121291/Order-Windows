import './PaymentSection.scss';
import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';

import mainTextApp from '../../../4 General Media-Info Recourses/01 Text/1.0 mainTextApp/mainTextApp';
const textPaymentSection = mainTextApp.textHomePage.textPaymentSection;

import cashImg from './resources/img/wallet.png';
import cardImg from './resources/img/credit-card.png';
import bankImg from './resources/img/museum.png';

const arrPayment = [
  { titel: 'Cash', img: cashImg },
  { titel: 'By bank card', img: cardImg },
  { titel: 'Cashless payments', img: bankImg },
];

const PaymentSection = () => {
  return (
    <section>
      <div className="general-container payment-section__container">
        <SectionHedar titel={textPaymentSection.titel} />
        <ul className="payment-section__list">
          {arrPayment.map((payment, i) => {
            return (
              <li className="payment-section__item" key={i}>
                <img className="payment-section__img" src={payment.img} alt={payment.titel} />
                <h4 className="payment-section__titel">{payment.titel}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PaymentSection;
