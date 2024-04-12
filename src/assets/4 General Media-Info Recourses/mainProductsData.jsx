import cold from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/0_Tab/img_cold.png';
import warm from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/0_Tab/img_warm.png';

import iconWoodWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/1.png';
import tabOneWoodWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/1_Tab_Wood/tree.jpg';

import iconAluminumWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/2.png';
import tabOneAluminumWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/2_Tab_Aluminum/cold.jpg';
import tabTwoAluminumWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/2_Tab_Aluminum/warm.jpg';

import iconPlasticWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/3.png';
import tabOnePlasticWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/3_Tab_Plastic/warm.jpg';

import iconPanoramicWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/4.png';
import tabOnePanoramicWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/4_Tab_Panoramic/aluminum.jpg';
import tabTwoPanoramicWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/4_Tab_Panoramic/plastic.jpg';

import iconTakeOutWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/icons/5.png';
import tabOneTakeOutWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/5_Tab_Take_out/aluminum.jpg';
import tabTwoTakeOutWindows from '../6 Pages/6.1 Home Page/6.1.3 ProductSection/resources/5_Tab_Take_out/tree.jpg';

const mainProductsData = [
  {
    product: 'demo',
    icons: '',
    tabs: [
      {
        titel: 'cold',
        img: cold,
        description: [
          'Structural thickness 42-58 mm',
          'Glazing: polished glass (4 - 5 mm thick)',
          'Thermal insulation: 0.07 sq.m. * C/W',
          'Sound insulation: 20-27 dB',
        ],
        price: 25,
      },
      {
        titel: 'warm',
        img: warm,
        description: [
          'Structural profile thickness: 58-78 m',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.63 - 1.05 sq.m. * C/W',
          'Sound insulation: up to class 5',
        ],
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
        description: [
          'Structural thickness 40-42 mm',
          'Glazing: polished glass (4 mm thick)',
          'Thermal insulation: 0.07 sq.m. * C/W',
          'Sound insulation: 20-27 dB',
        ],
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
        description: [
          'Structural thickness 60-68 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.63 - 1.05 sq.m. * C/W',
          'Sound insulation: up to class 5',
        ],
        price: 80,
      },
      {
        titel: 'aluminum',
        img: tabTwoAluminumWindows,
        description: [
          'Structural profile thickness: 40-50 m',
          'Glazing: polished glass (4 - 5 mm thick)',
          'Thermal insulation: 0.07 sq.m. * C/W',
          'Sound insulation: 20-27 dB',
        ],
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
        description: [
          'Structural thickness 58-70 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.63 - 1.05 sq.m. * C/W',
          'Sound insulation: up to class 5',
        ],
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
        description: [
          'Structural thickness 60-68 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.63 - 1.05 sq.m. * C/W',
          'Sound insulation: up to class 5',
        ],
        price: 100,
      },
      {
        titel: 'panoramic',
        img: tabTwoPanoramicWindows,
        description: [
          'Structural profile thickness: 40-50 m',
          'Glazing: polished glass (4 - 5 mm thick)',
          'Thermal insulation: 0.07 sq.m. * C/W',
          'Sound insulation: 20-27 dB',
        ],
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
        description: [
          'Structural thickness 75-80 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.65 - 1.25 sq.m. * C/W',
          'Sound insulation: up to class 4',
        ],
        price: 100,
      },
      {
        titel: 'Take out windows',
        img: tabTwoTakeOutWindows,
        description: [
          'Structural profile thickness: 45-55 m',
          'Glazing: polished glass (4 - 5 mm thick)',
          'Thermal insulation: 0.08 sq.m. * C/W',
          'Sound insulation: 25-37 dB',
        ],
        price: 90,
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
        description: [
          'Structural thickness 40-42 mm',
          'Glazing: polished glass (4 mm thick)',
          'Thermal insulation: 0.07 sq.m. * C/W',
          'Sound insulation: 20-27 dB',
        ],
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
        description: [
          'Structural thickness 60-68 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.63 - 1.05 sq.m. * C/W',
          'Sound insulation: up to class 5',
        ],
        price: 80,
      },
      {
        titel: 'aluminum',
        img: tabTwoAluminumWindows,
        description: [
          'Structural profile thickness: 40-50 m',
          'Glazing: polished glass (4 - 5 mm thick)',
          'Thermal insulation: 0.07 sq.m. * C/W',
          'Sound insulation: 20-27 dB',
        ],
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
        description: [
          'Structural thickness 58-70 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.63 - 1.05 sq.m. * C/W',
          'Sound insulation: up to class 5',
        ],
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
        description: [
          'Structural thickness 60-68 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.63 - 1.05 sq.m. * C/W',
          'Sound insulation: up to class 5',
        ],
        price: 100,
      },
      {
        titel: 'panoramic',
        img: tabTwoPanoramicWindows,
        description: [
          'Structural profile thickness: 40-50 m',
          'Glazing: polished glass (4 - 5 mm thick)',
          'Thermal insulation: 0.07 sq.m. * C/W',
          'Sound insulation: 20-27 dB',
        ],
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
        description: [
          'Structural thickness 75-80 mm',
          'Glazing: single-chamber and double-glazed windows',
          'Thermal insulation: 0.65 - 1.25 sq.m. * C/W',
          'Sound insulation: up to class 4',
        ],
        price: 100,
      },
      {
        titel: 'Take out windows',
        img: tabTwoTakeOutWindows,
        description: [
          'Structural profile thickness: 45-55 m',
          'Glazing: polished glass (4 - 5 mm thick)',
          'Thermal insulation: 0.08 sq.m. * C/W',
          'Sound insulation: 25-37 dB',
        ],
        price: 90,
      },
    ],
  },
];

export default mainProductsData;
