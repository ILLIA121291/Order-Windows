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
    action: 'вызвать замерщика',
    titelSmall: 'Закажите бесплатную',
    titelBig: 'оценку сегодня',
    btnTitel: 'вызвать замерщика!',
    infoMassege: 'Ваши данные конфиденциальны',
  },
  callMeBack: {
    action: 'позвонить клиенту',
    titelSmall: 'Введите свои данные и',
    titelBig: 'нажмите заказать звонок',
    btnTitel: 'Заказать звонок',
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
  },
  balkonProfile: {
    titel: {
      one: 'Калькулятор',
      two: 'Выберите тип остекления и его профиль',
    },
    options: [
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
  },
};

const textLanguagePanel = {
  english: 'Английский',
  russian: 'Русский',
  japan: 'Японский',
};

const textGeneralPagesComponents = {
  textBlueCircles,
  textContactForm,
  textTimer,
  textBalconCalculator,
  textLanguagePanel,
};

export default textGeneralPagesComponents;
