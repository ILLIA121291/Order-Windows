import './HomePage.scss';

import FirstSection from '../6.1.2 FirstSection/FirstSection';
import ProductSection from '../6.1.3 ProductSection/ProductSection';
import FinishingSection from '../6.1.4 FinishingSection/FinishingSection';
import GallerySection from '../6.1.5 GallerySection/GallerySection';
import GuaranteeSection from '../6.1.6 GuaranteeSection/GuaranteeSection';
import PaymentSection from '../6.1.7 PaymentSection/PaymentSection';
import PromotionSection from '../6.1.8 PromotionSection/PromotionSection';
import LocationSection from '../6.1.9 LocationSection/LocationSection';

const HomePage = props => {
  return (
    <div>
      <FirstSection />
      <ProductSection setModalWindowState={props.setModalWindowState} />
      <FinishingSection />
      <GallerySection setModalWindowState={props.setModalWindowState} />
      <GuaranteeSection />
      <PaymentSection />
      <PromotionSection />
      <LocationSection />
    </div>
  );
};

export default HomePage;
