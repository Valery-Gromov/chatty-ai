import React, { useState } from "react";
import "./Info.scss";
import { LanguageContext } from '../../contexts/LanguageContext';

const engInfoTextValues = {
  infoTitle: 'A quick way to turn chaotic thoughts into pure text',
  infoListTextDictate: 'Dictate whatever is on your mind',
  infoListTextDoNext: 'Tell me what to do with the text',
  infoListTextResults: 'Get the result',
}

const ruInfoTextValues = {
  infoTitle: 'Быстрый способ превратить хаотичные мысли в чистый текст',
  infoListTextDictate: 'Диктуйте всё, что у вас на уме',
  infoListTextDoNext: 'Говорите, что сделать с текстом',
  infoListTextResults: 'Получайте результат',
}

function Info() {
  const {lang, setLang} = React.useContext(LanguageContext);
  const [textValue, setTextValue] = React.useState({
    infoTitle: 'A quick way to turn chaotic thoughts into pure text',
    infoListTextDictate: 'Dictate whatever is on your mind',
    infoListTextDoNext: 'Tell me what to do with the text',
    infoListTextResults: 'Get the result',
  })

  React.useEffect(() => {
    if (lang === 'Russian') {
      setTextValue(ruInfoTextValues);
    } else if (lang === 'English') {
      setTextValue(engInfoTextValues);
    }
  }, [lang])

  return (
    <div className="info">
      <h1 className="info__title">{textValue.infoTitle}</h1>
      <li className="info__container">
        <ul className="info__card">
          <p className="info__text">{textValue.infoListTextDictate}</p>
        </ul>
        <ul className="info__card">
          <p className="info__text">{textValue.infoListTextDoNext}</p>
        </ul>
        <ul className="info__card">
          <p className="info__text">{textValue.infoListTextResults}</p>
        </ul>
      </li>
    </div>
  );
}

export default Info;
