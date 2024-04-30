import './CurrencyPanel.scss';

const CurrencyPanel = props => {
  const onChangeCurrency = e => {
    switch (e.target.value) {
      case 'USD':
        props.setCurrencyApp(currencyApp => 'USD');
        localStorage.setItem('currency', 'USD');
        break;
      case 'EUR':
        props.setCurrencyApp(currencyApp => 'EUR');
        localStorage.setItem('currency', 'EUR');
        break;
      case 'JPY':
        props.setCurrencyApp(currencyApp => 'JPY');
        localStorage.setItem('currency', 'JPY');
        break;
    }
  };

  return (
    <select
      className="general-select currency-panel__select"
      value={localStorage.getItem('currency')}
      name="currency"
      onChange={e => onChangeCurrency(e)}
    >
      <option className="currency-panel__select-option" value="USD">
        USD
      </option>
      <option className="currency-panel__select-option" value="EUR">
        EUR
      </option>
      <option className="currency-panel__select-option" value="JPY">
        JPY
      </option>
    </select>
  );
};

export default CurrencyPanel;
