import { useState } from 'react';
import './DisplayImage.scss';

const DisplayImage = props => {
  const { displayImgIndex, arrImg, displayBtns } = props.componentType;

  const [displayImg, setDisplayImg] = useState(displayImgIndex);

  const onShowPrevious = () => {
    if (displayImg - 1 < 0) {
      setDisplayImg(arrImg.length - 1);
    } else {
      setDisplayImg(displayImg => displayImg - 1);
    }
  };

  const onShowNextImg = () => {
    if (displayImg + 1 > arrImg.length - 1) {
      setDisplayImg(0);
    } else {
      setDisplayImg(displayImg => displayImg + 1);
    }
  };

  const showBtns = displayBtns ? 'flex' : 'none';

  return (
    <div className="display-img">
      <img className="display-img__img" src={arrImg[displayImg]} alt="Display image" />
      <button
        className="display-img__btns display-img__btns-previous"
        style={{ display: showBtns }}
        onClick={() => onShowPrevious()}
      >
        <span className="display-img__btns-previous-img"></span>
      </button>
      <button className="display-img__btns display-img__btns-next" style={{ display: showBtns }} onClick={() => onShowNextImg()}>
        <span className="display-img__btns-next-img"></span>
      </button>
    </div>
  );
};

export default DisplayImage;
