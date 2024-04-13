import './App.scss';

import HomePage from '../../6 Pages/6.1 Home Page/6.1.1 HomePage/HomePage';
import AppHeader from '../3.2 AppHeader/AppHeader';
import AppFooter from '../3.3 AppFooter/AppFooter';
import ModalWindowContactForm from '../../5 General Pages Components/5.4 ModalWindowContactForm/ModalWindowContactForm';
import { useState } from 'react';
import ModalWindowBalconCalculator from '../../5 General Pages Components/5.6 ModalWindowBalconCalculator/ModalWindowBalconCalculator';

function App() {
  const [modalWindowContactForm, setModalWindowContactForm] = useState({ type: 'callMeBack', modalState: false });
  const [modalWindowBalconCalculator, setModalWindowBalconCalculator] = useState(false)

  return (
    <div className="a">
      <AppHeader setModalWindowContactForm={setModalWindowContactForm} />
      <HomePage setModalWindowBalconCalculator={setModalWindowBalconCalculator} />
      <AppFooter setModalWindowContactForm={setModalWindowContactForm}/>
      <ModalWindowContactForm modalData={modalWindowContactForm} setModalState={setModalWindowContactForm} />
      <ModalWindowBalconCalculator modalData={modalWindowBalconCalculator} setModalState={setModalWindowBalconCalculator}/>
    </div>
  );
}

export default App;
