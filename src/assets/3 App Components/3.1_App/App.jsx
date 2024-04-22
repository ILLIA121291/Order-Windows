import './App.scss';

import { useState } from 'react';

import HomePage from '../../6 Pages/6.1 Home Page/6.1.1 HomePage/HomePage';
import AppHeader from '../3.2 AppHeader/AppHeader';
import AppFooter from '../3.3 AppFooter/AppFooter';
import ModalWindowContactForm from '../../5 General Pages Components/5.4 ModalWindow/ModalWindow';

import englishLanguage from '../../4 General Media-Info Recourses/01 Text/1.1 English/1.1.0 englishLanguage';
import russianLanguage from '../../4 General Media-Info Recourses/01 Text/1.2 Russian/1.1.0 russianLanguage';
import japanLanguage from '../../4 General Media-Info Recourses/01 Text/1.3 Japan/1.1.0 japanLanguage';

let initialLanguge;
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'English');
  initialLanguge = englishLanguage;
} else {
  switch (localStorage.getItem('language')) {
    case 'English':
      initialLanguge = englishLanguage;
      break;
    case 'Russian':
      initialLanguge = russianLanguage;
      break;
    case 'Japan':
      initialLanguge = japanLanguage;
      break;
  }
}

let initialCurrency;
if (!localStorage.getItem('currency')) {
  localStorage.setItem('currency', 'USD');
} else {
  switch (localStorage.getItem('currency')) {
    case 'USD':
      initialCurrency = 'USD';
      break;
    case 'EUR':
      initialCurrency = 'EUR';
      break;
    case 'JPY':
      initialCurrency = 'JPY';
      break;
  }
}

function App() {
  const [modalWindowState, setModalWindowState] = useState({
    component: '',
    componentType: '',
    display: false,
    closeOverlay: true,
    closeEscapeBtn: true,
  });

  const [langugeApp, setLangugeApp] = useState(initialLanguge);
  const [currencyApp, setCurrencyApp] = useState(initialCurrency);

  return (
    <div className="a">
      <AppHeader
        setModalWindowState={setModalWindowState}
        langugeApp={langugeApp}
        setLangugeApp={setLangugeApp}
        currencyApp={currencyApp}
        setCurrencyApp={setCurrencyApp}
      />
      <HomePage setModalWindowState={setModalWindowState} langugeApp={langugeApp} currencyApp={currencyApp} />
      <AppFooter setModalWindowState={setModalWindowState} langugeApp={langugeApp} />
      <ModalWindowContactForm
        modalWindowState={modalWindowState}
        setModalWindowState={setModalWindowState}
        langugeApp={langugeApp}
      />
    </div>
  );
}

export default App;
