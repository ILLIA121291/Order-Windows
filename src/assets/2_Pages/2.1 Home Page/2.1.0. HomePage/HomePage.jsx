import FirstSection from '../2.1.1 FirstSection/FirstSection';
import ProductSection from '../2.1.2 ProductSection/ProductSection';
import FinishingSection from '../2.1.3 FinishingSection/FinishingSection';
import GallerySection from '../2.1.4 GallerySection/GallerySection';
import GuaranteeSection from '../2.1.5 GuaranteeSection/GuaranteeSection';
import './HomePage.scss';

const HomePage = () => {
  return (<div>
    <FirstSection/>
    <ProductSection/>
    <FinishingSection/>
    <GallerySection/>
    <GuaranteeSection/>
    </div>)
}

export default HomePage