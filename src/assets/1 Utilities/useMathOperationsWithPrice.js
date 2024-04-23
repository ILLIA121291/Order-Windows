const useMathOperationsWithPrice = (action, one, two) => {
  if (!action || !one || !two) return 'useMathOper...';

  let result;

  switch (action) {
    case '+':
      result = addition(one, two);
      break;
  }

  return result;
};

const addition = (one, two) => {
  const priceOne = +one.replaceAll(' ', '');
  const priceTwo = +two.replaceAll(' ', '');

  let priceForDisplay = (priceOne + priceTwo).toFixed(2).toString();

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

export default useMathOperationsWithPrice;
