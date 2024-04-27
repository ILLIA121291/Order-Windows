import './ContactForm.scss';

import { useEffect, useState } from 'react';
import useHttp from '../../2 Server Components/2.1 useHttp/useHttp';
import useInitData from './useInitData';
import DisplayHttpStatusInInformMessage from './DisplayHttpStatusInInformMessage';
import { validationCustomerName, validationCustomerPhone } from '../../1 Utilities/usedValidationFunctions';

const ContactForm = props => {
  const {
    type,
    langugeApp,
    currencyApp,
    orderData,
    setModalWindowState,
    setFromDisplayBalconCalculator,
    setOrderBalcon,
    setFromDisplayFinishingMaterialCalculator,
    setOrderFinishingMaterial,
  } = props;
  const textContactForm = langugeApp.textGeneralPagesComponents.textContactForm;

  const { formText, customerAction, initData } = useInitData(langugeApp, type, orderData, currencyApp);

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
      return { ...customerData, customerAction, customerLanguage: langugeApp.language, customerCurrency: currencyApp };
    });
  }, [type, orderData, langugeApp, currencyApp]);

  const sendDataToServer = e => {
    e.preventDefault();

    if (customerData.customerName != '' && customerData.customerPhone != '') {
      setSendFormBtnState(true);
      setInputDisabled(true);
      postCustomerData(customerData);

      setTimeout(() => {
        setProcess('wating');
        setCustomerData({
          customerAction,
          customerName: '',
          customerPhone: '',
          customerLanguage: langugeApp.language,
          customerCurrency: currencyApp,
        });
        setSendFormBtnState(false);
        setInputDisabled(false);

        if (setModalWindowState) {
          setModalWindowState(modalWindowState => {
            return { ...modalWindowState, display: false };
          });
        }

        if (setFromDisplayBalconCalculator) {
          setTimeout(() => {
            setFromDisplayBalconCalculator('Balckon type');
            setOrderBalcon({
              balkonType: 0,
              balkonWidth: '',
              balkonHeight: '',
              glazingType: '',
              profileType: '',
            });
          }, 300);
        }

        if (setFromDisplayFinishingMaterialCalculator) {
          setTimeout(() => {
            setFromDisplayFinishingMaterialCalculator('Quantity Finishing Material');
          }, 300);
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
