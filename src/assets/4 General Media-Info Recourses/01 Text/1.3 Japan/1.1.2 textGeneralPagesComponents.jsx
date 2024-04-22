const textBlueCircles = [
  ['高い', '品質'],
  ['素早い', 'インストール'],
  ['3年', '保証'],
  ['ごみ', '除去'],
];

const textContactForm = {
  placeholderName: 'あなたの名前を入力してください',
  placeholderPhone: '電話番号を入力してください',
  statusLoading: '詳細を送信中です。お待ちください。',
  statusSuccess: 'あなたの詳細情報を無事受信しましたので、すぐにご連絡させていただきます。 ありがとう！',
  statusError: '問題が発生しました。数分後にもう一度お試しください。',
  enterName: 'お名前を入力してください。',
  nameIncorrect: '名前が間違っています。A ～ Z とスペースの文字を使用できます。',
  enterTelephone: '電話番号を入力してください。',
  phoneIncorrect: '電話番号が間違っています。使用できるのは 0 ～ 9 の番号のみです。',

  callMeasure: {
    action: 'コールメジャー',
    titelSmall: '無料で予約してください',
    titelBig: '今日の見積もり',
    btnTitel: 'コールメジャー!',
    infoMassege: 'あなたのデータは機密です',
  },
  callMeBack: {
    action: '顧客に電話する',
    titelSmall: '詳細を入力し、',
    titelBig: 'クリック注文コール',
    btnTitel: 'オーダーコール',
    infoMassege: '10分以内に折り返しお電話させていただきます',
  },
};

const textTimer = {
  titel: 'プロモーション終了まで:',
  days: '日々',
  hours: '時間',
  minutes: '分',
  seconds: '秒',
};

const textBalconCalculator = {
  balkonType: {
    titel: {
      one: '電卓',
      two: 'バルコニーの形状を選択し、寸法を指定してください',
    },
    placeholderWidth: '幅',
    placeholderHeight: '身長',
    millimeters: 'んん',
    btnNext: '次',
  },
  balkonProfile: {
    titel: {
      one: '電卓',
      two: 'ガラスの種類とそのプロファイルを選択してください',
    },
    options: [
      '木製グレージング',
      'アルミニウムガラス',
      'プラスチックフレームを使用したグレージング',
      'パノラマガラス',
      'エクステンション付きグレージング',
    ],
    radioTitel: {
      cold: '寒い',
      warm: '暖かい',
    },
    btnNext: '次',
  },
};

const textLanguagePanel = {
  english: '英語',
  russian: 'ロシア',
  japan: '日本',
};

const textGeneralPagesComponents = {
  textBlueCircles,
  textContactForm,
  textTimer,
  textBalconCalculator,
  textLanguagePanel,
};

export default textGeneralPagesComponents;
