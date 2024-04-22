import decorationImgInteriorDecoration from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/decoration_img.png';
import lining from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/lining.png';
import plasticLining from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/plastic.png';
import pvsPanels from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/pvh.png';
import laminateFlooring from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/laminate.png';
import woodFlooring from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/1_interior_decoration/tree.png';

import decorationImgExternalFinishing from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/decoration2_img.png';
import metalSiding from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/metal.png';
import plasticLiningTwo from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/plastic.png';
import corrugatedSheet from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/profnastil.png';
import woodenLining from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/tree.png';
import vinylsiding from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/2_external_finishing/vinil.png';

import decorationImgFaçadeGlazing from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/decoration3_img.jpg';
import aluminumProfile from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/aluminum.png';
import framelessGlazing from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/bezram.png';
import pncProfile from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/pvh.png';
import woodProfile from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/3_façade glazing/tree.png';

import decorationImgRoofForBalconyfrom from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/decoration4_img.png';
import corrugatedSheetfrom from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/gofrolist.png';
import metalTiles from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/metallocherepitsa.png';
import ondulin from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/ondulin.png';
import polycarbonate from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/polikarbonat.png';
import doubleGlazedWindow from '../../6 Pages/6.1 Home Page/6.1.4 FinishingSection/resources/4_roof for balcony/steklopaket.png';

const mainFinishingData = [
  {
    chapter: 'interior decoration',
    decorationImg: decorationImgInteriorDecoration,
    material: [
      {
        name: 'Lining',
        img: lining,
        price: 6,
        size: '1508x2050x3 mm',
      },
      {
        name: 'Plastic lining',
        img: plasticLining,
        price: 7.5,
        size: '2108x150x30 mm',
      },
      {
        name: 'PVC panels',
        img: pvsPanels,
        price: 8,
        size: '1800x1500x7 mm',
      },
      {
        name: 'Laminate flooring',
        img: laminateFlooring,
        price: 12.5,
        size: '1710x1990x5 mm',
      },
      {
        name: 'Wood flooring',
        img: woodFlooring,
        price: 16.5,
        size: '1500x200x50 mm',
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
        price: 2,
        size: '2108x150x30 mm',
      },
      {
        name: 'Plastic lining',
        img: plasticLiningTwo,
        price: 4.5,
        size: '150x2000x10 mm',
      },
      {
        name: 'Corrugated sheet',
        img: corrugatedSheet,
        price: 18,
        size: '1450x1850x35 mm',
      },
      {
        name: 'Wooden lining',
        img: woodenLining,
        price: 14.82,
        size: '1200x100x10 mm',
      },
      {
        name: 'Vinyl siding',
        img: vinylsiding,
        price: 160.5,
        size: '1655x1205x45 mm',
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
        price: 16,
        size: '990x2005x70 mm',
      },
      {
        name: 'Frameless glazing',
        img: framelessGlazing,
        price: 5,
        size: '800x1735x15 mm',
      },
      {
        name: 'PVC profile',
        img: pncProfile,
        price: 7.51,
        size: '1508x2050x3 mm',
      },
      {
        name: 'Wood profile',
        img: woodProfile,
        price: 81.5,
        size: '50x3005x50 mm',
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
        price: 10,
        size: '1400x1400x40 mm',
      },
      {
        name: 'Metal tiles',
        img: metalTiles,
        price: 2.5,
        size: '1600x2000x20 mm',
      },
      {
        name: 'Ondulin',
        img: ondulin,
        price: 13.25,
        size: '1800x2000x56 mm',
      },
      {
        name: 'Polycarbonate',
        img: polycarbonate,
        price: 17.5,
        size: '1000x2000x10 mm',
      },
      {
        name: 'Double-glazed window',
        img: doubleGlazedWindow,
        price: 26.5,
        size: '1900x1900x34 mm',
      },
    ],
  },
];

export default mainFinishingData;
