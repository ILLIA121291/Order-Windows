import './BalconCalculator.scss';
import { useState } from 'react';
import BalconTypeForm from './components/1_BalconTypeForm';
import BalconGlazingProfileForm from './components/2_BalconGlazingProfileForm';
import ContactForm from '../5.1 ContactForm/ContactForm';

const BalconCalculator = props => {
  const textBalconCalculator = props.langugeApp.textGeneralPagesComponents.textBalconCalculator;
  const [formDisply, setFromDisplay] = useState('Balckon type');

  const [orderBalcon, setOrderBalcon] = useState({
    balkonType: 0,
    balkonWidth: '',
    balkonHeight: '',
    glazingType: '',
    profileType: '',
  });

  const showPreviousForm = () => {
    if (formDisply == 'Contact form') {
      setFromDisplay('Balckon glazing & profile');
    }

    if (formDisply == 'Balckon glazing & profile') {
      setFromDisplay('Balckon type');
    }
  };

  let displyForm;
  switch (formDisply) {
    case 'Balckon type':
      displyForm = (
        <BalconTypeForm
          setOrderBalcon={setOrderBalcon}
          orderBalcon={orderBalcon}
          setFromDisplay={setFromDisplay}
          textBalconCalculator={textBalconCalculator}
        />
      );
      break;
    case 'Balckon glazing & profile':
      displyForm = (
        <BalconGlazingProfileForm
          setOrderBalcon={setOrderBalcon}
          orderBalcon={orderBalcon}
          setFromDisplay={setFromDisplay}
          textBalconCalculator={textBalconCalculator}
        />
      );
      break;
    case 'Contact form':
      displyForm = (
        <ContactForm
          type={'orderOrderBalcon'}
          orderData={orderBalcon}
          setModalWindowState={props.setModalWindowState}
          setFromDisplayBalconCalculator={setFromDisplay}
          setOrderBalcon={setOrderBalcon}
          langugeApp={props.langugeApp}
          currencyApp={props.currencyApp}
        />
      );
      break;
  }

  return (
    <div className="balkon-calculator__container">
      <button
        className="balkon-calculator__back-btn"
        style={{ display: formDisply == 'Balckon type' ? 'none' : 'block' }}
        onClick={() => showPreviousForm()}
      >
        <i className="balkon-calculator__back-btn-left"></i>
      </button>

      {displyForm}
    </div>
  );
};

export default BalconCalculator;
