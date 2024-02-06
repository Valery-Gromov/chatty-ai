// import shareButton from '../../images/share.svg';
import deleteButton from '../../images/delete.svg';
import copyButton from '../../images/copy.svg';
import { useEffect, useState, useContext } from 'react';
import { engResultTextValues, ruResultTextValues } from '../../constants/data';
import { LanguageContext } from '../../contexts/LanguageContext';
import copy from 'clipboard-copy';

function Results(props) {
  const [editedText, setEditedText] = useState(null);
  const { editUserRequest, handlePopupIsOpen, fixTextErorrs, responseUpdate, handleDeleteResponse } = props;
  const { lang } = useContext(LanguageContext);
  const [textValue, setTextValue] = useState({});

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
  }, [responseUpdate]);

  const copyToClipboard = () => {
    copy(editedText);
    alert('Текст скопирован в буфер обмена!');
  }

  const handleEditTransformButton = () => {
    editUserRequest(editedText);
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
          </div>
          <button className="results__open-button" onClick={handlePopupIsOpen}>
            {textValue.resultButton}
          </button>
        </div>
        <textarea className="results__text" value={editedText || ''} readOnly />
        <div className="results__buttons-container">
          <button className="results__option-button">
            <img src={deleteButton} onClick={handleDeleteResponse} />
          </button>
          <button className="results__option-button" onClick={copyToClipboard} >
            <img src={copyButton} />
          </button>
          {/* <button className="results__option-button">
            <img src={shareButton} />
          </button> */}
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
