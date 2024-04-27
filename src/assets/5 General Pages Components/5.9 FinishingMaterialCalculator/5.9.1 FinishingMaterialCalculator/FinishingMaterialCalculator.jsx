import './FinishingMaterialCalculator.scss';

import mainFinishingData from '../../../4 General Media-Info Recourses/02 mainDataApp/mainFinishingData';
import useDisplayPriceInCurrency from '../../../1 Utilities/useDisplayPriceInCurrency';
import { useEffect, useState } from 'react';
import ContactForm from '../../5.1 ContactForm/ContactForm';
import QuantityFinishingMaterial from '../5.9.2 QuantityFinishingMaterial/QuantityFinishingMaterial';
import DeliveryPaymentFinishingMaterial from '../5.9.3 DeliveryPaymentFinishingMaterial/DeliveryPaymentFinishingMaterial';

const FinishingMaterialCalculator = props => {
  const textFinishingMaterialCalculator = props.langugeApp.textGeneralPagesComponents.textFinishingMaterialCalculator;

  const { materialGroup, materialNumber } = props.componentType;
  const selectedMaterialData = mainFinishingData[materialGroup].material[materialNumber];

  const selectedMaterialText =
    props.langugeApp.textHomePage.textFinishingSection.material[materialGroup].materialNames[materialNumber];

  const [orderFinishingMaterial, setOrderFinishingMaterial] = useState({
    materialGroup: mainFinishingData[materialGroup].chapter,
    materialName: selectedMaterialData.name,
    materialQtyPrice: useDisplayPriceInCurrency(props.currencyApp, selectedMaterialData.price),
    materialQty: 0,
    materialCost: 0,
    deliveryType: '',
    deliveryCost: '0',
    deliveryAddress: '',
    orderAmount: '',
    paymentType: '',
    orderCurrency: props.currencyApp,
  });

  useEffect(() => {
    setOrderFinishingMaterial({
      materialGroup: mainFinishingData[materialGroup].chapter,
      materialName: selectedMaterialData.name,
      materialQtyPrice: useDisplayPriceInCurrency(props.currencyApp, selectedMaterialData.price),
      materialQty: 0,
      materialCost: 0,
      deliveryType: '',
      deliveryCost: '0',
      deliveryAddress: '',
      orderAmount: '',
      paymentType: '',
      orderCurrency: props.currencyApp,
    });
  }, [props.componentType]);

  const [FromDisplayFinishingMaterialCalculator, setFromDisplayFinishingMaterialCalculator] =
    useState('Quantity Finishing Material');

  const showPreviousForm = () => {
    if (FromDisplayFinishingMaterialCalculator == 'ContactForm') {
      setFromDisplayFinishingMaterialCalculator('Delivery Payment Finishing Material');
    }

    if (FromDisplayFinishingMaterialCalculator == 'Delivery Payment Finishing Material') {
      setFromDisplayFinishingMaterialCalculator('Quantity Finishing Material');
    }
  };

  let dispayFrom;
  switch (FromDisplayFinishingMaterialCalculator) {
    case 'Quantity Finishing Material':
      dispayFrom = (
        <QuantityFinishingMaterial
          textFinishingMaterialCalculator={textFinishingMaterialCalculator}
          selectedMaterialData={selectedMaterialData}
          selectedMaterialText={selectedMaterialText}
          currencyApp={props.currencyApp}
          orderFinishingMaterial={orderFinishingMaterial}
          setOrderFinishingMaterial={setOrderFinishingMaterial}
          setFromDisplayFinishingMaterialCalculator={setFromDisplayFinishingMaterialCalculator}
        />
      );
      break;

    case 'Delivery Payment Finishing Material':
      dispayFrom = (
        <DeliveryPaymentFinishingMaterial
          textFinishingMaterialCalculator={textFinishingMaterialCalculator}
          currencyApp={props.currencyApp}
          orderFinishingMaterial={orderFinishingMaterial}
          setOrderFinishingMaterial={setOrderFinishingMaterial}
          setFromDisplayFinishingMaterialCalculator={setFromDisplayFinishingMaterialCalculator}
        />
      );
      break;

    case 'ContactForm':
      dispayFrom = (
        <ContactForm
          orderData={orderFinishingMaterial}
          type="orderFinishingMaterial"
          langugeApp={props.langugeApp}
          currencyApp={props.currencyApp}
          setModalWindowState={props.setModalWindowState}
          setFromDisplayFinishingMaterialCalculator={setFromDisplayFinishingMaterialCalculator}
          setOrderFinishingMaterial={setOrderFinishingMaterial}
        />
      );
      break;
  }

  return (
    <div className="finishing-materia-calculator__container">
      <button
        className="finishing-materia-calculator__back-btn"
        style={{ display: FromDisplayFinishingMaterialCalculator == 'Quantity Finishing Material' ? 'none' : 'block' }}
        onClick={() => showPreviousForm()}
      >
        <i className="finishing-materia-calculator__back-btn-left"></i>
      </button>
      {dispayFrom}
    </div>
  );
};

export default FinishingMaterialCalculator;
