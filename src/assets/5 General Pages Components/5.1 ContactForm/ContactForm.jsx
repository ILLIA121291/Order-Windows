import './ContactForm.scss';

import { useState } from 'react';
import useHttp from '../../2 Server Components/2.1 useHttp/useHttp';

const ContactForm = () => {
  const [customerData, setCustomerData] = useState({ customerName: '', customerPhone: '' });

  const { request, process, setProcess } = useHttp();

  const postCustomerData = async data => {
    const getRes = await request(`https://jsonplaceholder.typicode.com/posts`, 'POST', JSON.stringify(data), {
      'Content-type': 'application/json',
    });

    return console.log(getRes), setProcess('success');
  };

  const sendDataToServer = e => {
    e.preventDefault();
    postCustomerData(customerData);
    setTimeout(() => {
      setProcess('wating'), setCustomerData({ customerName: '', customerPhone: '' });
    }, 10000);
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
      displayStatus = <p className="contact-form__confidential">Your data is confidential</p>;
  }

  return (
    <div className="contact-form__container">
      <form name="form" className="contact-form">
        <h3 className="contact-form__titel">
          Book your free <br />
          <span className="contact-form__titel-accent">estimate today</span>
        </h3>
        <input
          className="contact-form__input"
          type="text"
          name="customerName"
          placeholder="Enter your name"
          required
          value={customerData.customerName}
          onChange={e =>
            setCustomerData(customerData => {
              return { ...customerData, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          className="contact-form__input"
          type="number"
          name="customerPhone"
          placeholder="Enter your phone number"
          required
          value={customerData.customerPhone}
          onChange={e =>
            setCustomerData(customerData => {
              return { ...customerData, [e.target.name]: e.target.value };
            })
          }
        />
        <button
          className="contact-form__btn"
          type="submit"
          onClick={e => {
            sendDataToServer(e);
          }}
        >
          CALL MEASURE!
        </button>
        {displayStatus}
      </form>
    </div>
  );
};

export default ContactForm;
