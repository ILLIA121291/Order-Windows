const useDisplayPrice = (qty, price, zerro) => {
  let priceForDisplay = (qty * +price).toFixed(2);

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
    if (!zerro) {
      resultArr.push(...afterDot);
    }

    priceForDisplay = resultArr.join('');
  }
  return  priceForDisplay
};

export default useDisplayPrice;
