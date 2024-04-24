const useInitData = (langugeApp, type, orderData, currencyApp) => {
  const textContactForm = langugeApp.textGeneralPagesComponents.textContactForm;

  let formText;
  let customerAction;

  switch (type) {
    case 'callMeasure':
      formText = textContactForm.callMeasure;
      customerAction = 'Order: sizing manager';
      break;
    case 'callMeBack':
      formText = textContactForm.callMeBack;
      customerAction = 'Order: phone call';
      break;
    case 'orderOrderBalcon':
      formText = textContactForm.callMeasure;
      customerAction = 'Order: balcon manager';
      break;
    case 'orderFinishingMaterial':
      formText = textContactForm.orderFinishingMaterial;
      customerAction = 'Order: finishing material';
      break;
  }

  let initData;

  if (orderData) {
    initData = {
      ...orderData,
      customerAction,
      customerTime: `${new Date()}`,
      customerName: '',
      customerPhone: '',
      customerLanguage: langugeApp.language,
      customerCurrency: currencyApp,
    };
  } else {
    initData = {
      customerAction,
      customerTime: `${new Date()}`,
      customerName: '',
      customerPhone: '',
      customerLanguage: langugeApp.language,
      customerCurrency: currencyApp,
    };
  }

  return {
    formText,
    customerAction,
    initData,
  };
};

export default useInitData;
