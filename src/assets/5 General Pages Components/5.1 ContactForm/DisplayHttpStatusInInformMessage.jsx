const DisplayHttpStatusInInformMessage = props => {
  let displayHttpStatusInInformMessage;

  switch (props.process) {
    case 'loading':
      displayHttpStatusInInformMessage = (
        <p className="contact-form__confidential" style={{ color: 'orange' }}>
          {props.textContactForm.statusLoading}
        </p>
      );
      break;
    case 'success':
      displayHttpStatusInInformMessage = (
        <p className="contact-form__confidential" style={{ color: 'green' }}>
          {props.textContactForm.statusSuccess}
        </p>
      );
      break;
    case 'error':
      displayHttpStatusInInformMessage = (
        <p className="contact-form__confidential" style={{ color: 'red' }}>
          {props.textContactForm.statusError}
        </p>
      );
      break;
    default:
      displayHttpStatusInInformMessage = <p className="contact-form__confidential">{props.formText.infoMassege}</p>;
      break;
  }

  return displayHttpStatusInInformMessage;
};

export default DisplayHttpStatusInInformMessage;
