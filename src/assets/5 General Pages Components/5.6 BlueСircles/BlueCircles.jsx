import './BlueCircles.scss';

import mainTextApp from '../../4 General Media-Info Recourses/01 Text/1.0 mainTextApp/mainTextApp';

const textBlueCircles = mainTextApp.textDifferentComponents.textBlueCircles;

const BlueCircles = () => {
  return (
    <ul className="blue-circles__list">
      <li className="blue-circles__item">
        {textBlueCircles[0][0]}
        <br />
        {textBlueCircles[0][1]}
      </li>
      <li className="blue-circles__item">
        {textBlueCircles[1][0]}
        <br />
        {textBlueCircles[1][1]}
      </li>
      <li className="blue-circles__item">
        {textBlueCircles[2][0]}
        <br />
        {textBlueCircles[2][1]}
      </li>
      <li className="blue-circles__item">
        {textBlueCircles[3][0]}
        <br />
        {textBlueCircles[3][1]}
      </li>
    </ul>
  );
};

export default BlueCircles;
