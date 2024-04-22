const useDisplayPriceInCurrency = (currency, price) => {
  let priceForDisplay;

  switch (currency) {
    case 'USD':
      priceForDisplay = price.toFixed(2);
      break;
    case 'EUR':
      priceForDisplay = (price * 0.94).toFixed(2);
      break;
    case 'JPY':
      priceForDisplay = (price * 154.64).toFixed(2);
      break;
  }

  const dot = priceForDisplay.indexOf('.');

  if (dot > 2) {
    const resultArr = [];

    let beforDot = priceForDisplay.slice(0, dot).split('').reverse();
    let afterDot = priceForDisplay.slice(dot).split('');
    for (let i = 0; i < beforDot.length; i++) {
      resultArr.push(beforDot[i]);

      if ((i + 1) % 3 == 0 && i != beforDot.length - 1) {
        resultArr.push(' ');
      }
    }

    resultArr.reverse();
    resultArr.push(...afterDot);
    priceForDisplay = resultArr.join('');
  }

  return priceForDisplay;
};

export default useDisplayPriceInCurrency;
