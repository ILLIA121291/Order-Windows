import './LocationSection.scss';
import SectionHedar from '../6.1.0 Page General Components/1.4 SectionHedar/SectionHedar';
import GoogleMap from '../../../5 General Pages Components/5.3 GoogleMap/GoogleMap';

import mainTextApp from '../../../4 General Media-Info Recourses/01 Text/1.0 mainTextApp/mainTextApp';
const textLocationSection = mainTextApp.textHomePage.textLocationSection;
const textGeneralInformation = mainTextApp.textGeneralInformation;

const arrLocationInfo = [
  { titel: textLocationSection.titelLegalAddress, description: textGeneralInformation.LegalAddress },
  { titel: textLocationSection.titelActualAddress, description: textGeneralInformation.LegalAddress },
  { titel: textLocationSection.titelTelephone, description: textGeneralInformation.telphone },
  { titel: textLocationSection.titelEmail, description: textGeneralInformation.email },
  {
    titel: textLocationSection.titelWorkingHours,
    description: `${textGeneralInformation.workingHours.start} - ${textGeneralInformation.workingHours.end} ${textGeneralInformation.workingDays}`,
  },
];

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="general-container location-section__container">
        <SectionHedar titel={textLocationSection.titel} />
        <div className="location-section__block">
          <div className="location-section__goole-map">
            <GoogleMap />
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
