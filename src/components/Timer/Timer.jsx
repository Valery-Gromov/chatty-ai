import React, { useState, useEffect } from 'react';
import Voice from '../../images/voice.svg';
import './Timer.scss';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);


  // console.log(seconds, minutes)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (minutes < 3 && seconds < 59) {
        setSeconds(seconds + 1);
      } else if (minutes < 3) {
        setMinutes(minutes + 1);
        setSeconds(0);
      } else {
        return clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, minutes]);

  return (
    <div className="timer">
      <img alt="" className="timer__image" src={Voice} />
      <span className="timer__text-time">{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</span>
    </div>
  );
}

export default Timer;
