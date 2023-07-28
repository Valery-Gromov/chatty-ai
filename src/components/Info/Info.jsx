import React, { useState } from "react";
import "./Info.scss";

function Info() {
  const [onText, setOnText] = useState(true);

  console.log(onText);
  return (
    <div className="info">
      <h1 className="info__title">
        Быстрый способ превратить хаотичные мысли в чистый текст
      </h1>
      <li className="info__container">
        <ul className="info__card">
          <p className="info__text">Диктуйте всё, что у вас на уме</p>
        </ul>
        <ul className="info__card">
          <p className="info__text">Говорите, что сделать с текстом</p>
        </ul>
        <ul className="info__card">
          <p className="info__text">Получайте результат</p>
        </ul>
      </li>
    </div>
  );
}

export default Info;
