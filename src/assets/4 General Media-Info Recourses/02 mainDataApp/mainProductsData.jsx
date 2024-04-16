import cold from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/0_Tab/img_cold.png';
import warm from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/0_Tab/img_warm.png';

import iconWoodWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/1.png';
import tabOneWoodWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/1_Tab_Wood/tree.jpg';

import iconAluminumWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/2.png';
import tabOneAluminumWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/2_Tab_Aluminum/cold.jpg';
import tabTwoAluminumWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/2_Tab_Aluminum/warm.jpg';

import iconPlasticWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/3.png';
import tabOnePlasticWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/3_Tab_Plastic/warm.jpg';

import iconPanoramicWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/4.png';
import tabOnePanoramicWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/4_Tab_Panoramic/aluminum.jpg';
import tabTwoPanoramicWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/4_Tab_Panoramic/plastic.jpg';

import iconTakeOutWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/5.png';
import tabOneTakeOutWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/5_Tab_Take_out/aluminum.jpg';
import tabTwoTakeOutWindows from '../../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/5_Tab_Take_out/tree.jpg';

const mainProductsData = [
  {
    product: 'demo',
    icons: '',
    tabs: [
      {
        titel: 'cold',
        img: cold,
        price: 25,
      },
      {
        titel: 'warm',
        img: warm,
        price: 40,
      },
    ],
  },
  {
    product: 'Wood Windows',
    icons: iconWoodWindows,
    tabs: [
      {
        titel: 'wood',
        img: tabOneWoodWindows,
        price: 80,
      },
    ],
  },
  {
    product: 'Aluminum Windows',
    icons: iconAluminumWindows,
    tabs: [
      {
        titel: 'aluminum',
        img: tabOneAluminumWindows,
        price: 80,
      },
      {
        titel: 'aluminum',
        img: tabTwoAluminumWindows,
        price: 40,
      },
    ],
  },
  {
    product: 'Plastic Windows',
    icons: iconPlasticWindows,
    tabs: [
      {
        titel: 'plastic',
        img: tabOnePlasticWindows,
        price: 55,
      },
    ],
  },
  {
    product: 'Panoramic Windows',
    icons: iconPanoramicWindows,
    tabs: [
      {
        titel: 'panoramic',
        img: tabOnePanoramicWindows,
        price: 100,
      },
      {
        titel: 'panoramic',
        img: tabTwoPanoramicWindows,
        price: 90,
      },
    ],
  },
  {
    product: 'Take out Windows',
    icons: iconTakeOutWindows,
    tabs: [
      {
        titel: 'Take out windows',
        img: tabOneTakeOutWindows,
        price: 100,
      },
      {
        titel: 'Take out windows',
        img: tabTwoTakeOutWindows,
        price: 90,
      },
    ],
  },
];

export default mainProductsData;
