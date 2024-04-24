import './ContactForm.scss';

import { useEffect, useState } from 'react';
import useHttp from '../../2 Server Components/2.1 useHttp/useHttp';
import useInitData from './useInitData';
import DisplayHttpStatusInInformMessage from './DisplayHttpStatusInInformMessage';
import { validationCustomerName, validationCustomerPhone } from '../../1 Utilities/usedValidationFunctions';

const ContactForm = props => {
  const textContactForm = props.langugeApp.textGeneralPagesComponents.textContactForm;

  const { formText, action, initData } = useInitData(props.langugeApp, props.type, props.orderData);

  const [customerData, setCustomerData] = useState(initData);
  const [sendFromBtnState, setSendFormBtnState] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  const { request, process, setProcess } = useHttp();

  const postCustomerData = async data => {
    const getResponse = await request(`https://jsonplaceholder.typicode.com/posts`, 'POST', JSON.stringify(data), {
      'Content-type': 'application/json',
    });

    return console.log(getResponse), setProcess('success');
  };

  useEffect(() => {
    setCustomerData(customerData => {
      return { ...customerData, action, customerLanguage: props.langugeApp.language };
    });
  }, [props.type, props.langugeApp]);

  const sendDataToServer = e => {
    e.preventDefault();

    if (customerData.customerName != '' && customerData.customerPhone != '') {
      setSendFormBtnState(true);
      setInputDisabled(true);
      postCustomerData(customerData);

      setTimeout(() => {
        setProcess('wating');
        setCustomerData({ action: action, customerName: '', customerPhone: '', customerLanguage: props.langugeApp.language });
        setSendFormBtnState(false);
        setInputDisabled(false);

        if (props.setModalWindowState) {
          props.setModalWindowState(modalWindowState => {
            return { ...modalWindowState, display: false };
          });
        }

        if (props.setFromDisplayBalconCalculator) {
          props.setFromDisplayBalconCalculator('Balckon type');
          props.setOrderBalcon({
            balkonType: 0,
            balkonWidth: '',
            balkonHeight: '',
            glazingType: 'Wooden glazing',
            profileType: '',
          });
        }

        if (props.setFromDisplayFinishingMaterialCalculator) {
          props.setFromDisplayFinishingMaterialCalculator('Quantity Finishing Material');
        }
      }, 5000);
    } else {
      setSendFormBtnState(true);

      if (customerData.customerName == '') {
        setValidCutomerNameState(false);
      }

      if (customerData.customerPhone == '') {
        setValidCutomerPhoneState(false);
      }
    }
  };

  const [validCutomerNameState, setValidCutomerNameState] = useState(true);
  const [validCutomerPhoneState, setValidCutomerPhoneState] = useState(true);

  useEffect(() => {
    if (customerData.customerName != '') {
      setValidCutomerNameState(validationCustomerName(customerData.customerName));
    }

    if (customerData.customerPhone != '') {
      setValidCutomerPhoneState(validationCustomerPhone(customerData.customerPhone));
    }

    if (validCutomerNameState == false) {
      setSendFormBtnState(true);
    } else if (validCutomerPhoneState == false) {
      setSendFormBtnState(true);
    } else if (validCutomerNameState && validCutomerPhoneState) {
      setSendFormBtnState(false);
    }
  }, [customerData, validCutomerNameState, validCutomerPhoneState]);

  return (
    <div className="contact-form__container">
      <form name="form" className="contact-form">
        <h3 className="contact-form__titel">
          {formText.titelSmall} <br />
          <span className="contact-form__titel-accent">{formText.titelBig}</span>
        </h3>
        <input
          className="contact-form__input"
          type="text"
          name="customerName"
          disabled={inputDisabled}
          placeholder={textContactForm.placeholderName}
          value={customerData.customerName}
          onChange={e =>
            setCustomerData(customerData => {
              return { ...customerData, [e.target.name]: e.target.value };
            })
          }
        />
        <p
          className="contact-form__input-no-valid"
          style={{
            opacity: validCutomerNameState ? 0 : 1,
          }}
        >
          {customerData.customerPhone == '' ? textContactForm.enterName : textContactForm.nameIncorrect}
        </p>
        <input
          className="contact-form__input"
          type="text"
          name="customerPhone"
          placeholder={textContactForm.placeholderPhone}
          disabled={inputDisabled}
          value={customerData.customerPhone}
          onChange={e =>
            setCustomerData(customerData => {
              return { ...customerData, [e.target.name]: e.target.value };
            })
          }
        />
        <p
          className="contact-form__input-no-valid"
          style={{
            opacity: validCutomerPhoneState ? 0 : 1,
          }}
        >
          {customerData.customerPhone == '' ? textContactForm.enterTelephone : textContactForm.phoneIncorrect}
        </p>
        <button
          className="contact-form__btn"
          type="submit"
          onClick={e => {
            sendDataToServer(e);
          }}
          disabled={sendFromBtnState}
        >
          {formText.btnTitel}
        </button>
        <DisplayHttpStatusInInformMessage process={process} textContactForm={textContactForm} formText={formText} />
      </form>
    </div>
  );
};

export default ContactForm;
