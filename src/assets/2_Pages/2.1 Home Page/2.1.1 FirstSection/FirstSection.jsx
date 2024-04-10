import ContactForm from '../../../1_Components/1.3 ContactForm/ContactForm';
import './FirstSection.scss';




const FirstSection = () => {
  return (<section className='first-section'>
    <div className='general-container first-section__container'>
      <div className='first-section__left'>
      <h2 className='first-section__left-titel'>Glazing of balconies on a "turn-key" <br/> 
      <span className='first-section__left-titel-accent' >basis for $1,500!</span>
      </h2>
      <ul className='first-section__left-list' >
        <li className='first-section__left-item' >High<br/>quality</li>
        <li className='first-section__left-item' >Quick<br/>installation</li>
        <li className='first-section__left-item' >3 year<br/>warranty</li>
        <li className='first-section__left-item' >Garbage<br/>removal</li>
      </ul>
      </div>
      <div className='first-section__right'><ContactForm/></div>
    </div>
    </section>)
};

export default FirstSection;
