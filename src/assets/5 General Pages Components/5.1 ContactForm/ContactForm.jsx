import './ContactForm.scss';

import { useEffect, useState } from 'react';
import useHttp from '../../2 Server Components/2.1 useHttp/useHttp';

const ContactForm = props => {
  const callMeasure = {
    action: 'call measure',
    titelSmall: 'Book your free',
    titelBig: 'estimate today',
    btnTitel: 'CALL MEASURE!',
    infoMassege: 'Your data is confidential',
  };

  const callMeBack = {
    action: 'call customer',
    titelSmall: 'Enter your details and',
    titelBig: 'click order call',
    btnTitel: 'Order call',
    infoMassege: 'We will call you back within 10 minutes',
  };

  let formText;

  switch (props.type) {
    case 'callMeasure':
      formText = callMeasure;
      break;
    case 'callMeBack':
      formText = callMeBack;
      break;
  }

  const [customerData, setCustomerData] = useState({ action: '', customerName: '', customerPhone: '' });
  const [sendFromBtnState, setSendFormBtnState] = useState(false);

  const { request, process, setProcess } = useHttp();

  const postCustomerData = async data => {
    const getResponse = await request(`https://jsonplaceholder.typicode.com/posts`, 'POST', JSON.stringify(data), {
      'Content-type': 'application/json',
    });

    return console.log(getResponse), setProcess('success');
  };

  useEffect(() => {
    setCustomerData(customerData => {
      return { ...customerData, action: formText.action };
    });
  }, [props.type]);

  const sendDataToServer = e => {
    e.preventDefault();

    if (customerData.customerName != '' && customerData.customerPhone != '') {
      setSendFormBtnState(true);
      postCustomerData(customerData);
      setTimeout(() => {
        setProcess('wating'), setCustomerData({ action: formText.action, customerName: '', customerPhone: '' });
        setSendFormBtnState(false);
        if (props.setModalState) {
          props.setModalState(modalData => {
            return { ...modalData, modalState: false };
          });
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

  let displayStatus;

  switch (process) {
    case 'loading':
      displayStatus = (
        <p className="contact-form__confidential" style={{ color: 'orange' }}>
          We are sending your details, please wait.
        </p>
      );
      break;
    case 'success':
      displayStatus = (
        <p className="contact-form__confidential" style={{ color: 'green' }}>
          We have successfully received your details and will contact you soon. Thank you!
        </p>
      );
      break;
    case 'error':
      displayStatus = (
        <p className="contact-form__confidential" style={{ color: 'red' }}>
          Oops something went wrong, please try again in a few minutes.
        </p>
      );
      break;
    default:
      displayStatus = <p className="contact-form__confidential">{formText.infoMassege}</p>;
  }

  function validationCustomerName(string) {
    return string.match(/^[A-Za-z-\s]+$/) ? true : false;
  }

  function validationCustomerPhone(string) {
    return string.match(/^[0-9]+$/) ? true : false;
  }

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
          placeholder="Enter your name"
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
          {customerData.customerPhone == ''
            ? 'Please enter your name.'
            : 'The name is incorrect, you can use the characters A-Z and space.'}
        </p>
        <input
          className="contact-form__input"
          type="text"
          name="customerPhone"
          placeholder="Enter your phone number"
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
          {customerData.customerPhone == ''
            ? 'Please enter your telephone number.'
            : 'Incorrect phone number, you can only use numbers 0-9.'}
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
        {displayStatus}
      </form>
    </div>
  );
};

export default ContactForm;
