const useInitData = (langugeApp, type, orderData) => {
  const textContactForm = langugeApp.textGeneralPagesComponents.textContactForm;

  let formText;
  let action;

  switch (type) {
    case 'callMeasure':
      formText = textContactForm.callMeasure;
      action = 'Customer order: sizing manager';
      break;
    case 'callMeBack':
      formText = textContactForm.callMeBack;
      action = 'Customer order: phone call';
      break;
    case 'orderOrderBalcon':
      formText = textContactForm.callMeasure;
      action = 'Customer order: balcon manager';
      break;
    case 'orderFinishingMaterial':
      formText = textContactForm.orderFinishingMaterial;
      action = 'Customer order: finishing material';
      break;
  }

  let initData;

  if (orderData) {
    initData = { ...orderData, action, customerName: '', customerPhone: '', customerLanguage: langugeApp.language };
  } else {
    initData = { action, customerName: '', customerPhone: '', customerLanguage: langugeApp.language };
  }

  return {
    formText,
    action,
    initData,
  };
};

export default useInitData;
