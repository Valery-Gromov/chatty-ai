import React from "react";
import "./History.scss";
import Close from '../../images/close.svg';

function History({
  isOpenHistory,
  closeByOverlay,
  selected,
  onClickListIttem,
  setIsOpenHistory }) {

  //результат сохранять в этот объект
  const listHistory = [
    { text: "Запросов Запросов Запросов Запросов", data: "24 июля 2023" },
    { text: "onRecordingComplete", data: "28 июля 2023" },
    { text: "hdnsmlcms", data: "16 июля 2023" },
  ];

  return (
    <div
      onClick={(e) => closeByOverlay(e)}
      className={`history ${isOpenHistory ? "opened" : ""}`}
    >
      <div className="history__popup">
        <div className="history__title-container">
        <h2 className="history__text">История запросов</h2>
        <img onClick={() => setIsOpenHistory(false)} className="history__close-icon" src={Close} />
        </div>


        <ul className="history__list">
          {listHistory.map((item, index) => (
            <li
              onClick={() => onClickListIttem(index)}
              className={`history__element ${selected === index && "active"}`}
              key={index}
            >
              <h1 className="history__element-title">{item.text}</h1>
              <p className="history__element-subtitle">{item.data}</p>
            </li>
          ))}
        </ul>

        <p className="history__text history__counter">{`${listHistory.length}/10`}</p>
      </div>
    </div>
  );
}

export default History;
