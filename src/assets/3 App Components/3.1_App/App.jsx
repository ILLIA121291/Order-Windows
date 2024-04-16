import './App.scss';

import { useState } from 'react';

import HomePage from '../../6 Pages/6.1 Home Page/6.1.1 HomePage/HomePage';
import AppHeader from '../3.2 AppHeader/AppHeader';
import AppFooter from '../3.3 AppFooter/AppFooter';
import ModalWindowContactForm from '../../5 General Pages Components/5.4 ModalWindow/ModalWindow';

import english from '../../4 General Media-Info Recourses/01 Text/1.1 English/1.1.1 textGeneralInformation';

function App() {
  const [modalWindowState, setModalWindowState] = useState({
    component: '',
    componentType: '',
    display: false,
    closeOverlay: true,
    closeEscapeBtn: true,
  });

  


  return (
    <div className="a">
      <AppHeader setModalWindowState={setModalWindowState} />
      <HomePage setModalWindowState={setModalWindowState} />
      <AppFooter setModalWindowState={setModalWindowState} />
      <ModalWindowContactForm modalWindowState={modalWindowState} setModalWindowState={setModalWindowState} />
    </div>
  );
}

export default App;
