import deleteButton from '../../images/delete.svg';
import copyButton from '../../images/copy.svg';
import shareButton from '../../images/share.svg';
import { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const engResultTextValues = {
    resultTitle: 'Your note',
    resultButton: 'Open the original text',
    resultButtonRewrite: '🧠 Rewrite',
    resultButtonFix: '📝 Fix errors',
  };
  
  const ruResultTextValues = {
    resultTitle: 'Ваша заметка',
    resultButton: 'Открыть оригинальный текст',
    resultButtonRewrite: '🧠 Переписать',
    resultButtonFix: '📝 Исправить ошибки',
  };

function Results(props) {
  const [editedText, setEditedText] = useState(null);
  const { textRender, getMessages, handlePopupIsOpen, fixTextErorrs, updateText } = props;
  const { lang, setLang } = useContext(LanguageContext);
  const [textValue, setTextValue] = useState({
    resultTitle: 'Your note',
    resultButton: 'Open the original text',
  });

  useEffect(() => {
    if (lang === 'Russian') {
      setTextValue(ruResultTextValues);
    } else if (lang === 'English') {
      setTextValue(engResultTextValues);
    }
  }, [lang]);

  useEffect(() => {
    const text = localStorage.getItem('editedText');
    setEditedText(text);

    console.log(editedText);
  }, [textRender, updateText]);

  const handleEditTransformButton = () => {
    getMessages(editedText);
  };

  const handleFixErrorsButton = () => {
    fixTextErorrs(editedText);
  };

  return (
    <div className="results">
      <div className="results__content">
        <div className="results__title-container">
          <div>
            <h2 className="result__title">{textValue.resultTitle}</h2>
            <span className="results__date">July 24, 2023</span>
          </div>
          <button className="results__open-button" onClick={handlePopupIsOpen}>
            {textValue.resultButton}
          </button>
        </div>
        <textarea className="results__text" value={editedText || ''} />
        <div className="results__buttons-container">
          <button className="results__option-button">
            <img src={deleteButton} />
          </button>
          <button className="results__option-button">
            <img src={copyButton} />
          </button>
          <button className="results__option-button">
            <img src={shareButton} />
          </button>
        </div>
      </div>
      <div className="results__transform-buttons-container">
        <button className="results__transform-button" onClick={handleEditTransformButton}>
          {textValue.resultButtonRewrite}
        </button>
        <button className="results__transform-button" onClick={handleFixErrorsButton}>
          {textValue.resultButtonFix}
        </button>
      </div>
    </div>
  );
}

export default Results;
