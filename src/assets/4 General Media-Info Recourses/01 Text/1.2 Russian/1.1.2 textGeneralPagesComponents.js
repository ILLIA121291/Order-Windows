const textBlueCircles = [
  ['высокое', 'качество'],
  ['быстрая', 'установка '],
  ['3 года', 'гарантии'],
  ['вывоз', 'мусора'],
];

const textContactForm = {
  placeholderName: 'Введите ваше имя',
  placeholderPhone: 'Введите номер телефона',
  statusLoading: 'Ваши данные отправляються, пожалуйста, подождите.',
  statusSuccess: 'Мы успешно получили ваши данные и скоро свяжемся с вами. Спасибо!',
  statusError: 'К сожалению, что-то пошло не так. Повторите попытку через несколько минут.',
  enterName: 'Пожалуйста, введите Ваше имя.',
  nameIncorrect: 'Имя неверное, можно использовать символы A-Z и пробел.',
  enterTelephone: 'Пожалуйста, введите номер телефона.',
  phoneIncorrect: 'Неверный номер телефона, можно использовать только цифры 0–9.',

  callMeasure: {
    titelSmall: 'Закажите бесплатную',
    titelBig: 'оценку сегодня',
    btnTitel: 'вызвать замерщика!',
    infoMassege: 'Ваши данные конфиденциальны',
  },
  callMeBack: {
    titelSmall: 'Введите свои данные и',
    titelBig: 'нажмите заказать звонок',
    btnTitel: 'Заказать звонок',
    infoMassege: 'Мы перезвоним вам в течение 10 минут',
  },

  orderFinishingMaterial: {
    titelSmall: 'Подтверждение заказа',
    titelBig: 'Укажите ваши данные',
    btnTitel: 'Заказать',
    infoMassege: 'Мы перезвоним вам в течение 10 минут',
  },
};

const textTimer = {
  titel: 'До конца акции:',
  days: 'Дней',
  hours: 'Часов',
  minutes: 'Минут',
  seconds: 'Секунд',
};

const textBalconCalculator = {
  balkonType: {
    titel: {
      one: 'Калькулятор',
      two: 'Выберите форму балкона и укажите размеры',
    },
    placeholderWidth: 'Ширина',
    placeholderHeight: 'Высота',
    millimeters: 'мм',
    btnNext: 'Далее',
    infoMessSizeBalkon: 'Пожалуйста, укажите размер балкона.',
  },
  balkonProfile: {
    titel: {
      one: 'Калькулятор',
      two: 'Выберите тип остекления и его профиль',
    },
    options: [
      '-- Выбрать --',
      'Деревянное остекление',
      'Алюминиевое остекление',
      'Остекление пластиковыми рамами',
      'Панорамное остекление',
      'Остекление с выносом',
    ],
    radioTitel: {
      cold: 'Холодный',
      warm: 'Теплый',
    },
    btnNext: 'Далее',
    infoMessGlazingType: 'Пожалуйста, выберите тип остекления',
    infoMessProfilType: 'Пожалуйста, выберите тип профиля',
  },
};

const textFinishingMaterialCalculator = {
  btnNext: 'Далее',

  textQuantityFinishingMaterial: {
    titel: 'Калькулятор материала',
    materialName: 'Название материала',
    materialSize: 'Размер материала',
    materialDescription: 'Описание материала',
    price: 'Цена',
    materialCost: 'Стоимость материала',
    infoMassege: 'Пожалуйста, укажите количество материала.',
  },

  textDeliveryPaymentFinishingMaterial: {
    titel: 'Доставка и оплата',
    payment: 'Оплата',
    cash: 'Наличные',
    bankCard: 'Банковской картой',
    cashlessPayments: 'Безналичный расчет',
    delivery: 'Доставка',
    noDelivery: 'Без доставки',
    cityDelivery: 'Доставка по городу бесплатно',
    cityOutsideDelivery: 'Доставка за пределы города',
    deliveryAddress: 'Адрес доставки',
    orderCost: 'Стоимость заказа',
    materialCost: 'Стоимость материала',
    deliveryCost: 'Стоимость доставки',
    total: 'Итого',
    infoMessPaymentType: 'Пожалуйста, выберите тип оплаты',
    infoMessDeliveryType: 'Пожалуйста, выберите тип доставки',
    infoMessDeliveryAddress: 'Пожалуйста, введите адрес доставки',
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
