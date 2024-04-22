import './FinishingMaterialCalculator.scss';

import mainFinishingData from '../../4 General Media-Info Recourses/02 mainDataApp/mainFinishingData';
import useDisplayPriceInCurrency from '../../1 Utilities/useDisplayPriceInCurrency';
import useDisplayPrice from '../../1 Utilities/useDisplayPrice';
import { useState } from 'react';

const FinishingMaterialCalculator = props => {
  const textFinishingMaterialCalculator = props.langugeApp.textGeneralPagesComponents.textFinishingMaterialCalculator;

  const { materialGroup, materialNumber } = props.componentType;
  const selectedMaterialData = mainFinishingData[materialGroup].material[materialNumber];

  const selectedMaterialText =
    props.langugeApp.textHomePage.textFinishingSection.material[materialGroup].materialNames[materialNumber];

  const [orderFinishingMaterial, setOrderFinishingMaterial] = useState({
    action: 'Customer order finishing material',
    materialGroup: mainFinishingData[materialGroup].chapter,
    materialName: selectedMaterialData.name,
    materialPriceQty: selectedMaterialData.price,
    materialQty: 0,
    materialCost: 0,
    delivery: '',
    orderAmount: props.currencyApp,
    orderCurrency: '',
  });

  return (
    <div className="finishing-materia-calculator__container">
      <QuantityFinishingMaterial
        textFinishingMaterialCalculator={textFinishingMaterialCalculator}
        selectedMaterialData={selectedMaterialData}
        selectedMaterialText={selectedMaterialText}
        currencyApp={props.currencyApp}
        orderFinishingMaterial={orderFinishingMaterial}
        setOrderFinishingMaterial={setOrderFinishingMaterial}
      />
    </div>
  );
};

const QuantityFinishingMaterial = ({
  textFinishingMaterialCalculator,
  selectedMaterialData,
  selectedMaterialText,
  currencyApp,
  orderFinishingMaterial,
  setOrderFinishingMaterial,
}) => {
  const textQuantityFinishingMaterial = textFinishingMaterialCalculator.textQuantityFinishingMaterial;

  return (
    <div className="quantity-material">
      <h2 className="quantity-material__titel">{textQuantityFinishingMaterial.titel}</h2>
      <img className="quantity-material__img" src={selectedMaterialData.img} alt={selectedMaterialText.name} />
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.materialName}
        <span className="quantity-material__general-accent"> {selectedMaterialText.name}</span>
      </p>
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.materialSize}
        <span className="quantity-material__general-accent"> {selectedMaterialData.size}</span>
      </p>
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.materialDescription}
        <span className="quantity-material__general-accent"> {selectedMaterialText.description}</span>
      </p>
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.price}
        <span className="quantity-material__general-accent">
          {' '}
          {useDisplayPriceInCurrency(currencyApp, selectedMaterialData.price)} {currencyApp}
        </span>
      </p>
      <div className="quantity-material__qty-panel">
        <button
          className="quantity-material__qty-panel-btn"
          onClick={() => {
            let check = orderFinishingMaterial.materialQty - 1 < 0 ? 0 : orderFinishingMaterial.materialQty - 1;
            setOrderFinishingMaterial(orderFinishingMaterial => {
              return { ...orderFinishingMaterial, materialQty: check };
            });
          }}
        >
          -
        </button>
        <input
          className="quantity-material__qty-panel-input"
          onFocus={() => {
            setOrderFinishingMaterial(orderFinishingMaterial => {
              return { ...orderFinishingMaterial, materialQty: '' };
            });
          }}
          onChange={e => {
            setOrderFinishingMaterial(orderFinishingMaterial => {
              return { ...orderFinishingMaterial, materialQty: +e.target.value };
            });
          }}
          value={orderFinishingMaterial.materialQty}
          type="number"
          name="quantityMaterial"
        />
        <button
          className="quantity-material__qty-panel-btn"
          onClick={() => {
            let amou = setOrderFinishingMaterial(orderFinishingMaterial => {
              return { ...orderFinishingMaterial, materialQty: orderFinishingMaterial.materialQty + 1, materialCost: amou };
            });
          }}
        >
          +
        </button>
      </div>
      <p>Massegge panel</p>
      <p className="quantity-material__general">
        {textQuantityFinishingMaterial.materialCost}{' '}
        <span className="quantity-material__general-accent">
          {orderFinishingMaterial.materialCost} {currencyApp}
        </span>
      </p>
    </div>
  );
};

export default FinishingMaterialCalculator;
