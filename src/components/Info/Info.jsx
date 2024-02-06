import React, { useState } from "react";
import "./Info.scss";
import { ruInfoTextValues, engInfoTextValues } from "../../constants/data";
import { LanguageContext } from '../../contexts/LanguageContext';

function Info() {
  const {lang, setLang} = React.useContext(LanguageContext);
  const [textValue, setTextValue] = React.useState({})

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
