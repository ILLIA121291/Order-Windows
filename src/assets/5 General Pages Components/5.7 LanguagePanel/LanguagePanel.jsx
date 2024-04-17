import './LanguagePanel.scss';

import englishLanguage from '../../4 General Media-Info Recourses/01 Text/1.1 English/1.1.0 englishLanguage';
import russianLanguage from '../../4 General Media-Info Recourses/01 Text/1.2 Russian/1.1.0 russianLanguage';

const LanguagePanel = props => {
  const textLanguagePanel = props.langugeApp.textGeneralPagesComponents.textLanguagePanel;

  const onChangelLanguage = e => {
    switch (e.target.value) {
      case 'Russian':
        props.setLangugeApp(langugeApp => russianLanguage);
        localStorage.setItem('language', 'Russian');
        break;
      default:
        props.setLangugeApp(langugeApp => englishLanguage);
        localStorage.setItem('language', 'English');
        break;
    }
  };

  return (
    <select className="language-panel__select" name="language" onChange={e => onChangelLanguage(e)}>
      <option
        className="language-panel__select-option"
        value="English"
        // selected={localStorage.getItem('language') == 'English' ? true : false}
      >
        {textLanguagePanel.english}
      </option>
      <option
        className="language-panel__select-option"
        value="Russian"
        // selected={localStorage.getItem('language') == 'Russian' ? true : false}
        selected
      >
        {textLanguagePanel.russian}
      </option>
    </select>
  );
};

export default LanguagePanel;
