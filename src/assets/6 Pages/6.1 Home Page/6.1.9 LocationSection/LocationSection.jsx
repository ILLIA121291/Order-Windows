import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';
import GoogleMap from '../../../5 General Pages Components/5.3 GoogleMap/GoogleMap';
import './LocationSection.scss';

const arrLocationInfo = [
  { titel: 'Legal address:', description: '2393 Forest Ave, Staten Island, NY 10503, United States' },
  { titel: 'Actual address:', description: '2391 Forest Ave, Staten Island, NY 10503, United States' },
  { titel: 'Telephone:', description: '+1 (955) 756-81- 73' },
  { titel: 'Email:', description: 'info@example.com' },
  { titel: 'Working hours:', description: '09:00 - 18:00 seven days a week' },
];

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="general-container location-section__container">
        <SectionHedar titel={'how to find us'} />
        <div className="location-section__block">
          <div className="location-section__goole-map">
            {/* <GoogleMap /> */}
          </div>
          <ul className="location-section__list">
            {arrLocationInfo.map((info, i) => {
              return (
                <li className="location-section__item" key={i}>
                  <span className="location-section__item-accent">{info.titel}</span> <br />
                  {info.description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
