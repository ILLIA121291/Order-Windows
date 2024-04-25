import './BlueCircles.scss';

const BlueCircles = props => {
  const textBlueCircles = props.langugeApp.textGeneralPagesComponents.textBlueCircles;
  return (
    <ul className="blue-circles__list">
      <li className="blue-circles__item">
        <p className="blue-circles__text">
          {textBlueCircles[0][0]}
          <br />
          {textBlueCircles[0][1]}
        </p>
      </li>
      <li className="blue-circles__item">
        <p className="blue-circles__text">
          {textBlueCircles[1][0]}
          <br />
          {textBlueCircles[1][1]}
        </p>
      </li>
      <li className="blue-circles__item">
        <p className="blue-circles__text">
          {textBlueCircles[2][0]}
          <br />
          {textBlueCircles[2][1]}
        </p>
      </li>
      <li className="blue-circles__item">
        <p className="blue-circles__text">
          {textBlueCircles[3][0]}
          <br />
          {textBlueCircles[3][1]}
        </p>
      </li>
    </ul>
  );
};

export default BlueCircles;
