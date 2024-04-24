import { useEffect, useState } from 'react';
import useDisplayPriceInCurrency from '../../../1 Utilities/useDisplayPriceInCurrency';
import useMathOperationsWithPrice from '../../../1 Utilities/useMathOperationsWithPrice';

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
              checked={orderFinishingMaterial.paymentType == 'cash' ? true : false}
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
              checked={orderFinishingMaterial.paymentType == 'by bank card' ? true : false}
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
              checked={orderFinishingMaterial.paymentType == 'cashless payments' ? true : false}
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
              checked={orderFinishingMaterial.deliveryType == 'no delivery' ? true : false}
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
              checked={orderFinishingMaterial.deliveryType == 'city delivery' ? true : false}
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
              checked={orderFinishingMaterial.deliveryType == 'city outside delivery' ? true : false}
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

export default DeliveryPaymentFinishingMaterial;
