import './LanguagePanel.scss';

import englishLanguage from '../../4 General Media-Info Recourses/01 Text/1.1 English/1.1.0 englishLanguage';
import russianLanguage from '../../4 General Media-Info Recourses/01 Text/1.2 Russian/1.1.0 russianLanguage';
import japanLanguage from '../../4 General Media-Info Recourses/01 Text/1.3 Japan/1.1.0 japanLanguage';

const textLanguagePanel = {
  english: 'English',
  russian: 'Русский',
  japan: '日本',
};

const LanguagePanel = props => {
  const onChangeLanguage = e => {
    switch (e.target.value) {
      case 'Russian':
        props.setLangugeApp(langugeApp => russianLanguage);
        localStorage.setItem('language', 'Russian');
        break;
      case 'Japan':
        props.setLangugeApp(langugeApp => japanLanguage);
        localStorage.setItem('language', 'Japan');
        break;
      default:
        props.setLangugeApp(langugeApp => englishLanguage);
        localStorage.setItem('language', 'English');
        break;
    }
  };

  return (
    <select className="general-select language-panel__select" name="language" onChange={e => onChangeLanguage(e)}>
      <option
        className="language-panel__select-option"
        value="English"
        selected={localStorage.getItem('language') == 'English' ? true : false}
      >
        {textLanguagePanel.english}
      </option>
      <option
        className="language-panel__select-option"
        value="Russian"
        selected={localStorage.getItem('language') == 'Russian' ? true : false}
      >
        {textLanguagePanel.russian}
      </option>
      <option
        className="language-panel__select-option"
        value="Japan"
        selected={localStorage.getItem('language') == 'Japan' ? true : false}
      >
        {textLanguagePanel.japan}
      </option>
    </select>
  );
};

export default LanguagePanel;
