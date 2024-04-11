import './SectionHedar.scss';

const SectionHedar = props => {
  return (
    <header className="heder-section">
      <h2 className="heder-section__titel">{props.titel}</h2>
      <div className="heder-section__decor"></div>
    </header>
  );
};

export default SectionHedar;
