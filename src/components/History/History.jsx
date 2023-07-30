import React, { useState } from "react";
import './History.scss';

function History ({ isOpenHistory, setIsOpenHistory }) {
  const [selected, setSelected] = useState(0);

  const onClickListIttem = (i) => {
    setSelected(i);
    setIsOpenHistory(false);
  }

  const listItems = [
    { 'text': 'Запросов Запросов Запросов Запросов', 'data': '24 июля 2023' },
    { 'text': 'onRecordingComplete', 'data': '28 июля 2023' },
    { 'text': 'hdnsmlcms;,s;,c;l<', 'data': '26 июля 2023' }
];

function closeByOverlay(e) {
  if(e.target === e.currentTarget) {
  setIsOpenHistory(false) 
  } 
}

  return (
    <div
    onClick={(e) => closeByOverlay(e)}
     className={`history ${ isOpenHistory ? 'opened' : ''}`}>
      <div className="history__popup">

      <h2 className="history__text">История запросов</h2>
        <ul className="history__list">
          
         {listItems.map((item, index) => (

            <li onClick={() => onClickListIttem(index)} className={`history__element ${selected === index && 'active'}`} key={index}>
              <h1 className="history__element-title">{item.text}</h1>
              <p className="history__element-subtitle">{item.data}</p>
            </li>

          ))} 
        </ul>
      <p className="history__text history__counter">{`${listItems.length}/10`}</p>

      </div>

    </div>

  );
};

export default History;
