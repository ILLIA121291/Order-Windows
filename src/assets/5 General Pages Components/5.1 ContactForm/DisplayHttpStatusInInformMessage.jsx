const DisplayHttpStatusInInformMessage = props => {
  let displayInformMessage;

  switch (props.process) {
    case 'loading':
      displayInformMessage = (
        <p className="contact-form__confidential" style={{ color: 'orange' }}>
          {props.textContactForm.statusLoading}
        </p>
      );
      break;
    case 'success':
      displayInformMessage = (
        <p className="contact-form__confidential" style={{ color: 'green' }}>
          {props.textContactForm.statusSuccess}
        </p>
      );
      break;
    case 'error':
      displayInformMessage = (
        <p className="contact-form__confidential" style={{ color: 'red' }}>
          {props.textContactForm.statusError}
        </p>
      );
      break;
    default:
      displayInformMessage = <p className="contact-form__confidential">{props.formText.infoMassege}</p>;
      break;
  }

  return displayInformMessage;
};

export default DisplayHttpStatusInInformMessage;
