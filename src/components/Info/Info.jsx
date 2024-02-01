import React, { useState } from "react";
import "./Info.scss";

function Info() {
  const [onText, setOnText] = useState(true);

  console.log(onText);
  return (
    <div className="info">
      <h1 className="info__title">
      A quick way to turn chaotic thoughts into pure text
      </h1>
      <li className="info__container">
        <ul className="info__card">
          <p className="info__text">Dictate whatever is on your mind</p>
        </ul>
        <ul className="info__card">
          <p className="info__text">Tell me what to do with the text</p>
        </ul>
        <ul className="info__card">
          <p className="info__text">Get the result</p>
        </ul>
      </li>
    </div>
  );
}

export default Info;
