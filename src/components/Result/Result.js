import React from 'react';
import deleteButton from '../images/delete.svg';
import copyButton from '../images/copy.svg';
import shareButton from '../images/share.svg';
import './Result.css';

import { LanguageContext } from '../../contexts/LanguageContext';

const engResultTextValues = {
  resultTitle: 'Your note',
  resultButton: 'Open the original text',
};

const ruResultTextValues = {
  resultTitle: 'Ваша заметка',
  resultButton: 'Открыть оригинальный текст',
};

function Results() {
  const { lang, setLang } = React.useContext(LanguageContext);
  const [textValue, setTextValue] = React.useState({
    resultTitle: 'Your note',
    resultButton: 'Open the original text',
  });

  React.useEffect(() => {
    if (lang === 'Russian') {
      setTextValue(ruResultTextValues);
    } else if (lang === 'English') {
      setTextValue(engResultTextValues);
    }
  }, [lang])

  return (
    <div className="results">
      <div className="results__title-container">
        <div>
          <h2 className="result__title">{textValue.resultTitle}</h2>
          <span className="results__date">24.07.2023</span>
        </div>
        <button className="results__open-button">{textValue.resultButton}</button>
      </div>
      <textarea className="results__text">
        Eddie remembered one of the summer days when he was ten years old. Then, in a forest
        clearing, a beloved childhood friend told him about what they would do when they grew up.
        Her words were more blinding than the sun. He listened to her with admiration and surprise,
        and when she asked what he would like to do, he answered without delay: –Something right,"
        and added, "We should do something great."… Well, that is, just the two of us. – What is it
        exactly? "What is it?" she asked.
      </textarea>
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
  );
}

export default Results;
