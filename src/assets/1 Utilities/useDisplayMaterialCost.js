const useDisplayMaterialCost = (price, qty) => {
  if (qty == 0 || price == 0) return 0;

  let priceForDisplay = (+price.replaceAll(' ', '') * qty).toFixed(2).toString();

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

export default useDisplayMaterialCost;
