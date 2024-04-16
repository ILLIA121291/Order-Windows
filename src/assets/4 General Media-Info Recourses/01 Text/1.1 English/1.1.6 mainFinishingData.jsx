import decorationImgInteriorDecoration from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/decoration_img.png';
import lining from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/lining.png';
import plasticLining from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/plastic.png';
import pvsPanels from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/pvh.png';
import laminateFlooring from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/laminate.png';
import woodFlooring from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/tree.png';

import decorationImgExternalFinishing from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/decoration2_img.png';
import metalSiding from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/metal.png';
import plasticLiningTwo from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/plastic.png';
import corrugatedSheet from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/profnastil.png';
import woodenLining from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/tree.png';
import vinylsiding from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/vinil.png';

import decorationImgFaçadeGlazing from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/decoration3_img.jpg';
import aluminumProfile from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/aluminum.png';
import framelessGlazing from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/bezram.png';
import pncProfile from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/pvh.png';
import woodProfile from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/tree.png';

import decorationImgRoofForBalconyfrom from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/decoration4_img.png';
import corrugatedSheetfrom from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/gofrolist.png';
import metalTiles from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/metallocherepitsa.png';
import ondulin from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/ondulin.png';
import polycarbonate from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/polikarbonat.png';
import doubleGlazedWindow from '../../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/steklopaket.png';

const mainFinishingData = [
  {
    chapter: 'interior decoration',
    decorationImg: decorationImgInteriorDecoration,
    material: [
      {
        name: 'Lining',
        img: lining,
        price: 6,
      },
      {
        name: 'Plastic lining',
        img: plasticLining,
        price: 7.5,
      },
      {
        name: 'PVC panels',
        img: pvsPanels,
        price: 8,
      },
      {
        name: 'Laminate flooring',
        img: laminateFlooring,
        price: 12.5,
      },
      {
        name: 'Wood flooring',
        img: woodFlooring,
        price: 16.5,
      },
    ],
  },

  {
    chapter: 'external finishing',
    decorationImg: decorationImgExternalFinishing,
    material: [
      {
        name: 'Metal siding',
        img: metalSiding,
        price: 6,
      },
      {
        name: 'Plastic lining',
        img: plasticLiningTwo,
        price: 7.5,
      },
      {
        name: 'Corrugated sheet',
        img: corrugatedSheet,
        price: 8,
      },
      {
        name: 'Wooden lining',
        img: woodenLining,
        price: 12.5,
      },
      {
        name: 'Vinyl siding',
        img: vinylsiding,
        price: 16.5,
      },
    ],
  },

  {
    chapter: 'façade glazing',
    decorationImg: decorationImgFaçadeGlazing,
    material: [
      {
        name: 'Aluminum profile',
        img: aluminumProfile,
        price: 6,
      },
      {
        name: 'Frameless glazing',
        img: framelessGlazing,
        price: 7.5,
      },
      {
        name: 'PVC profile',
        img: pncProfile,
        price: 8,
      },
      {
        name: 'Wood profile',
        img: woodProfile,
        price: 12.5,
      },
    ],
  },

  {
    chapter: 'roof for balcony',
    decorationImg: decorationImgRoofForBalconyfrom,
    material: [
      {
        name: 'Corrugated sheet',
        img: corrugatedSheetfrom,
        price: 6,
      },
      {
        name: 'Metal tiles',
        img: metalTiles,
        price: 7.5,
      },
      {
        name: 'Ondulin',
        img: ondulin,
        price: 8,
      },
      {
        name: 'Polycarbonate',
        img: polycarbonate,
        price: 12.5,
      },
      {
        name: 'Double-glazed window',
        img: doubleGlazedWindow,
        price: 16.5,
      },
    ],
  },
];

export default mainFinishingData;
