import { useEffect, useState } from 'react';
import useDisplayPriceInCurrency from "../../../1 Utilities/useDisplayPriceInCurrency";
import useDisplayMaterialCost from '../../../1 Utilities/useDisplayMaterialCost';

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

export default QuantityFinishingMaterial 