const textBlueCircles = [
  ['High', 'quality'],
  ['Quick', 'installation'],
  ['3 year', 'warranty'],
  ['Garbage', 'removal'],
];

const textContactForm = {
  placeholderName: 'Enter your name',
  placeholderPhone: 'Enter your phone number',
  statusLoading: 'We are sending your details, please wait.',
  statusSuccess: 'We have successfully received your details and will contact you soon. Thank you!',
  statusError: 'Oops something went wrong, please try again in a few minutes.',
  enterName: 'Please enter your name.',
  nameIncorrect: 'The name is incorrect, you can use the characters A-Z and space.',
  enterTelephone: 'Please enter your telephone number.',
  phoneIncorrect: 'Incorrect phone number, you can only use numbers 0-9.',

  callMeasure: {
    titelSmall: 'Book your free',
    titelBig: 'estimate today',
    btnTitel: 'CALL MEASURE!',
    infoMassege: 'Your data is confidential',
  },
  callMeBack: {
    titelSmall: 'Enter your details and',
    titelBig: 'click order call',
    btnTitel: 'Order call',
    infoMassege: 'We will call you back within 10 minutes',
  },

  orderFinishingMaterial: {
    titelSmall: 'Order confirmation',
    titelBig: 'Enter your detail',
    btnTitel: 'Order',
    infoMassege: 'We will call you back within 10 minutes',
  },
};

const textTimer = {
  titel: 'Until the end of the promotion:',
  days: 'Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
};

const textBalconCalculator = {
  balkonType: {
    titel: {
      one: 'Calculator',
      two: 'Select the shape of the balcony and indicate the dimensions',
    },
    placeholderWidth: 'Width',
    placeholderHeight: 'Height',
    millimeters: 'mm',
    btnNext: 'Next',
    infoMessSizeBalkon: 'Please indicate the size of the balcony.',
  },

  balkonProfile: {
    titel: {
      one: 'Calculator',
      two: 'Select the type of glazing and its profile',
    },
    options: ['Wooden glazing', 'Aluminum glazing', 'Glazing with plastic frames', 'Panoramic glazing', 'Glazing with extension'],
    radioTitel: {
      cold: 'Cold',
      warm: 'Warm',
    },
    btnNext: 'Next',
    infoMessGlazingType: 'Please select glazing type',
    infoMessProfilType: 'Please select profile type',
  },
};

const textFinishingMaterialCalculator = {
  btnNext: 'Next',

  textQuantityFinishingMaterial: {
    titel: 'Material calculator',
    materialName: 'Material name',
    materialSize: 'Material size',
    materialDescription: 'Material description',
    price: 'Price',
    materialCost: 'Material cost',
    infoMassege: 'Please indicate the quantity of material',
  },

  textDeliveryPaymentFinishingMaterial: {
    titel: 'Delivery & payment',
    payment: 'Payment',
    cash: 'Cash',
    bankCard: 'Bank card',
    cashlessPayments: 'Cashless payments',
    delivery: 'Delivery',
    noDelivery: 'No delivery',
    cityDelivery: 'City delivery free',
    cityOutsideDelivery: 'City outside delivery',
    deliveryAddress: 'Delivery address',
    orderCost: 'Order cost',
    materialCost: 'Material cost',
    deliveryCost: 'Delivery cost',
    total: 'Total',
    infoMessPaymentType: 'Please select payment type',
    infoMessDeliveryType: 'Please select delivery type',
    infoMessDeliveryAddress: 'Please enter delivery address',
  },
};

const textGeneralPagesComponents = {
  textBlueCircles,
  textContactForm,
  textTimer,
  textBalconCalculator,
  textFinishingMaterialCalculator,
};

export default textGeneralPagesComponents;
