import './FinishingMaterialCalculator.scss';

import mainFinishingData from '../../4 General Media-Info Recourses/02 mainDataApp/mainFinishingData';
import useDisplayPriceInCurrency from '../../1 Utilities/useDisplayPriceInCurrency';
import useDisplayMaterialCost from '../../1 Utilities/useDisplayMaterialCost';
import useMathOperationsWithPrice from '../../1 Utilities/useMathOperationsWithPrice';
import { useEffect, useState } from 'react';
import ContactForm from '../5.1 ContactForm/ContactForm';

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

  const [FromDisplayFinishingMaterialCalculator, setFromDisplayFinishingMaterialCalculator] =
    useState('Quantity Finishing Material');

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
        />
      );
      break;
  }

  return <div className="finishing-materia-calculator__container">{dispayFrom}</div>;
};

const QuantityFinishingMaterial = props => {
  const {
    textFinishingMaterialCalculator,
    selectedMaterialData,
    selectedMaterialText,
    currencyApp,
    orderFinishingMaterial,
    setOrderFinishingMaterial,
    setFromDisplayFinishingMaterialCalculator,
  } = props;

  const textQuantityFinishingMaterial = textFinishingMaterialCalculator.textQuantityFinishingMaterial;
  const materialPrice = useDisplayPriceInCurrency(currencyApp, selectedMaterialData.price);
  const [nextBtnState, setNextBtnState] = useState(false);

  useEffect(() => {
    if (nextBtnState == true) {
      orderFinishingMaterial.materialQty != 0 ? setNextBtnState(false) : null;
    }
  }, [orderFinishingMaterial]);

  return (
    <div className="quantity-material">
      <h2 className="quantity-material__titel">{textQuantityFinishingMaterial.titel}</h2>
      <img className="quantity-material__img" src={selectedMaterialData.img} alt={selectedMaterialText.name} />
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.materialName}
        {': '}
        <span className="quantity-material__general-accent">{selectedMaterialText.name}</span>
      </p>
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.materialSize}
        {': '}
        <span className="quantity-material__general-accent">{selectedMaterialData.size}</span>
      </p>
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.materialDescription}
        {': '}
        <span className="quantity-material__general-accent">{selectedMaterialText.description}</span>
      </p>
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.price}
        {': '}
        <span className="quantity-material__general-accent">
          {materialPrice} {currencyApp}
        </span>
      </p>
      <p className="quantity-material__general">Quantity</p>
      <div className="quantity-material__qty-panel">
        <button
          className="quantity-material__qty-panel-btn"
          onClick={() => {
            const checkMaterialQty = orderFinishingMaterial.materialQty - 1 < 0 ? 0 : orderFinishingMaterial.materialQty - 1;
            const checkMaterialCost =
              checkMaterialQty == 0 ? 0 : useDisplayMaterialCost(materialPrice, orderFinishingMaterial.materialQty - 1);

            setOrderFinishingMaterial(orderFinishingMaterial => {
              return {
                ...orderFinishingMaterial,
                materialQty: checkMaterialQty,
                materialCost: checkMaterialCost,
              };
            });
          }}
        >
          -
        </button>
        <input
          className="quantity-material__qty-panel-input"
          onChange={e => {
            setOrderFinishingMaterial(orderFinishingMaterial => {
              return {
                ...orderFinishingMaterial,
                materialQty: +e.target.value,
                materialCost: useDisplayMaterialCost(materialPrice, +e.target.value),
              };
            });
          }}
          value={orderFinishingMaterial.materialQty}
          type="number"
          name="quantityMaterial"
        />
        <button
          className="quantity-material__qty-panel-btn"
          onClick={() => {
            setOrderFinishingMaterial(orderFinishingMaterial => {
              return {
                ...orderFinishingMaterial,
                materialQty: orderFinishingMaterial.materialQty + 1,
                materialCost: useDisplayMaterialCost(materialPrice, orderFinishingMaterial.materialQty + 1),
              };
            });
          }}
        >
          +
        </button>
      </div>
      <p
        className="red-color general-from-inform-message quantity-material__inform-message"
        style={{ visibility: nextBtnState ? 'visible' : 'hidden' }}
      >
        {textQuantityFinishingMaterial.infoMassege}
      </p>
      <p className="quantity-material__general quantity-material__material-cost">{textQuantityFinishingMaterial.materialCost}</p>
      <p className="quantity-material__material-cost-accent">
        {orderFinishingMaterial.materialCost} {currencyApp}
      </p>
      <button
        disabled={nextBtnState}
        className="general-from-btn"
        type="button"
        style={{ marginTop: '30px' }}
        onClick={e => {
          if (orderFinishingMaterial.materialQty != 0) {
            setFromDisplayFinishingMaterialCalculator(showFrom => 'Delivery Payment Finishing Material');
          } else {
            setNextBtnState(true);
          }
        }}
      >
        {textFinishingMaterialCalculator.btnNext}
      </button>
    </div>
  );
};

const DeliveryPaymentFinishingMaterial = props => {
  const {
    textFinishingMaterialCalculator,
    currencyApp,
    orderFinishingMaterial,
    setOrderFinishingMaterial,
    setFromDisplayFinishingMaterialCalculator,
  } = props;

  const textDeliveryPaymentFinishingMaterial = textFinishingMaterialCalculator.textDeliveryPaymentFinishingMaterial;
  const costCityOutsideDelivery = useDisplayPriceInCurrency(currencyApp, 20);
  const displyOrderAmount = useMathOperationsWithPrice(
    '+',
    orderFinishingMaterial.materialCost,
    orderFinishingMaterial.deliveryCost,
  );

  const [nextBtnState, setNextBtnState] = useState(false);
  const [infoMassegePaymentType, setInfoMassegePaymentType] = useState(false);
  const [infoMassegeDeliveryType, setInfoMassegeDeliveryType] = useState(false);
  const [infoMassegeDeliveryAddress, setInfoMassegeDeliveryAddress] = useState(false);

  const checkingFormBeforeNextStep = async () => {
    if (orderFinishingMaterial.paymentType != '') {
      setNextBtnState(false);
      setInfoMassegePaymentType(false);
    } else {
      setNextBtnState(true);
      setInfoMassegePaymentType(true);
    }

    if (orderFinishingMaterial.deliveryType != '') {
      setNextBtnState(false);
      setInfoMassegeDeliveryType(false);
    } else {
      setNextBtnState(true);
      setInfoMassegeDeliveryType(true);
    }

    if (
      (orderFinishingMaterial.deliveryType == 'city delivery' ||
        orderFinishingMaterial.deliveryType == 'city outside delivery') &&
      orderFinishingMaterial.deliveryAddress != ''
    ) {
      setNextBtnState(false);
      setInfoMassegeDeliveryAddress(false);
    }

    if (
      (orderFinishingMaterial.deliveryType == 'city delivery' ||
        orderFinishingMaterial.deliveryType == 'city outside delivery') &&
      orderFinishingMaterial.deliveryAddress == ''
    ) {
      setNextBtnState(true);
      setInfoMassegeDeliveryAddress(true);
    }

    if (orderFinishingMaterial.deliveryType == 'no delivery') {
      setInfoMassegeDeliveryAddress(false);
    }
  };

  useEffect(() => {
    if (nextBtnState) {
      checkingFormBeforeNextStep();
    }
  }, [orderFinishingMaterial]);

  return (
    <div className="delivery-payment-material">
      <h2 className="delivery-payment-material__titel">{textDeliveryPaymentFinishingMaterial.titel}</h2>
      <p className="delivery-payment-material__titel-small">{textDeliveryPaymentFinishingMaterial.payment}</p>
      <ul className="delivery-payment-material__list">
        <li className="delivery-payment-material__item">
          <label>
            <input
              className="delivery-payment-material__radio"
              value="cash"
              name="paymentType"
              type="radio"
              onChange={e => {
                setOrderFinishingMaterial(orderFinishingMaterial => {
                  return { ...orderFinishingMaterial, paymentType: e.target.value };
                });
              }}
            />
          </label>{' '}
          {textDeliveryPaymentFinishingMaterial.cash}
        </li>

        <li className="delivery-payment-material__item">
          <label>
            <input
              className="delivery-payment-material__radio"
              value="by bank card"
              name="paymentType"
              type="radio"
              onChange={e => {
                setOrderFinishingMaterial(orderFinishingMaterial => {
                  return { ...orderFinishingMaterial, paymentType: e.target.value };
                });
              }}
            />
          </label>{' '}
          {textDeliveryPaymentFinishingMaterial.bankCard}
        </li>

        <li className="delivery-payment-material__item">
          <label>
            <input
              className="delivery-payment-material__radio"
              value="cashless payments"
              name="paymentType"
              type="radio"
              onChange={e => {
                setOrderFinishingMaterial(orderFinishingMaterial => {
                  return { ...orderFinishingMaterial, paymentType: e.target.value };
                });
              }}
            />
          </label>{' '}
          {textDeliveryPaymentFinishingMaterial.cashlessPayments}
        </li>
      </ul>
      <p className="red-color general-from-inform-message" style={{ visibility: infoMassegePaymentType ? 'visible' : 'hidden' }}>
        {textDeliveryPaymentFinishingMaterial.infoMessPaymentType}
      </p>
      <p className="delivery-payment-material__titel-small">{textDeliveryPaymentFinishingMaterial.delivery}</p>
      <ul className="delivery-payment-material__list">
        <li className="delivery-payment-material__item">
          <label>
            <input
              className="delivery-payment-material__radio"
              type="radio"
              name="delivery"
              id="no delivery"
              onChange={e => {
                setOrderFinishingMaterial(orderFinishingMaterial => {
                  return { ...orderFinishingMaterial, deliveryType: e.target.id, deliveryCost: '0' };
                });
              }}
            />
          </label>{' '}
          {textDeliveryPaymentFinishingMaterial.noDelivery}
        </li>
        <li className="delivery-payment-material__item">
          <label>
            <input
              className="delivery-payment-material__radio"
              type="radio"
              name="delivery"
              id="city delivery"
              onChange={e => {
                setOrderFinishingMaterial(orderFinishingMaterial => {
                  return { ...orderFinishingMaterial, deliveryType: e.target.id, deliveryCost: '0' };
                });
              }}
            />
          </label>{' '}
          {textDeliveryPaymentFinishingMaterial.cityDelivery}
        </li>
        <li className="delivery-payment-material__item">
          <label>
            <input
              className="delivery-payment-material__radio"
              type="radio"
              name="delivery"
              id="city outside delivery"
              onChange={e => {
                setOrderFinishingMaterial(orderFinishingMaterial => {
                  return { ...orderFinishingMaterial, deliveryType: e.target.id, deliveryCost: costCityOutsideDelivery };
                });
              }}
            />
          </label>{' '}
          {textDeliveryPaymentFinishingMaterial.cityOutsideDelivery} <br />
          {'+'} {costCityOutsideDelivery} {currencyApp}
        </li>
      </ul>
      <p className="red-color general-from-inform-message" style={{ visibility: infoMassegeDeliveryType ? 'visible' : 'hidden' }}>
        {textDeliveryPaymentFinishingMaterial.infoMessDeliveryType}
      </p>
      <p className="delivery-payment-material__titel-small">{textDeliveryPaymentFinishingMaterial.deliveryAddress}</p>
      <textarea
        disabled={orderFinishingMaterial.deliveryType == 'no delivery' ? true : false}
        className="delivery-payment-material__delivery-address"
        value={orderFinishingMaterial.deliveryAddress}
        onChange={e => {
          e.preventDefault();
          setOrderFinishingMaterial(orderFinishingMaterial => {
            return { ...orderFinishingMaterial, deliveryAddress: e.target.value };
          });
        }}
      ></textarea>
      <p
        className="red-color general-from-inform-message"
        style={{ visibility: infoMassegeDeliveryAddress ? 'visible' : 'hidden' }}
      >
        {textDeliveryPaymentFinishingMaterial.infoMessDeliveryAddress}
      </p>
      <p className="delivery-payment-material__titel-small">{textDeliveryPaymentFinishingMaterial.orderCost}</p>
      <ul className="delivery-payment-material__list">
        <li className="delivery-payment-material__item">
          {textDeliveryPaymentFinishingMaterial.materialCost}
          {': '}
          {orderFinishingMaterial.materialCost} {currencyApp}
        </li>
        <li className="delivery-payment-material__item">
          {textDeliveryPaymentFinishingMaterial.deliveryCost}
          {': '}
          {orderFinishingMaterial.deliveryCost} {currencyApp}
        </li>
        <li className="delivery-payment-material__item">
          {textDeliveryPaymentFinishingMaterial.total}
          {': '}
          {displyOrderAmount} {currencyApp}
        </li>
      </ul>

      <button
        className="general-from-btn"
        disabled={nextBtnState}
        type="button"
        style={{ marginTop: '30px' }}
        onClick={e => {
          setOrderFinishingMaterial(orderFinishingMaterial => {
            return { ...orderFinishingMaterial, orderAmount: displyOrderAmount };
          });

          if (orderFinishingMaterial.paymentType != '' && orderFinishingMaterial.deliveryType == 'no delivery') {
            setFromDisplayFinishingMaterialCalculator('ContactForm');
          } else if (orderFinishingMaterial.paymentType != '' && orderFinishingMaterial.deliveryAddress != '') {
            setFromDisplayFinishingMaterialCalculator('ContactForm');
          } else {
            checkingFormBeforeNextStep();
          }
        }}
      >
        {textFinishingMaterialCalculator.btnNext}
      </button>
    </div>
  );
};

export default FinishingMaterialCalculator;
