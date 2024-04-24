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
    titelSmall: '無料で予約してください',
    titelBig: '今日の見積もり',
    btnTitel: 'コールメジャー!',
    infoMassege: 'あなたのデータは機密です',
  },
  callMeBack: {
    titelSmall: '詳細を入力し、',
    titelBig: 'クリック注文コール',
    btnTitel: 'オーダーコール',
    infoMassege: '10分以内に折り返しお電話させていただきます',
  },

  orderFinishingMaterial: {
    titelSmall: '注文の確認',
    titelBig: '詳細を入力してください',
    btnTitel: '注文',
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
    infoMessSizeBalkon: 'バルコニーのサイズをお知らせください。.',
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
    infoMessGlazingType: 'ガラスの種類を選択してください',
    infoMessProfilType: 'プロファイルの種類を選択してください',
  },
};

const textFinishingMaterialCalculator = {
  btnNext: '次',

  textQuantityFinishingMaterial: {
    titel: '材料計算機',
    materialName: '材質名',
    materialSize: '素材サイズ',
    materialDescription: '材質の説明',
    price: '価格',
    materialCost: '材料費',
    infoMassege: '材料の量を教えてください',
  },

  textDeliveryPaymentFinishingMaterial: {
    titel: '配送と支払い',
    payment: '支払い',
    cash: '現金',
    bankCard: 'バンクカード',
    cashlessPayments: 'キャッシュレス決済',
    delivery: '配達',
    noDelivery: '配達なし',
    cityDelivery: '市内配達無料',
    cityOutsideDelivery: '市外配達',
    deliveryAddress: '配送先住所',
    orderCost: '注文コスト',
    materialCost: '材料費',
    deliveryCost: '配送料',
    total: '合計',
    infoMessPaymentType: 'お支払いタイプを選択してください',
    infoMessDeliveryType: '配送タイプを選択してください',
    infoMessDeliveryAddress: '配送先住所を入力してください',
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
