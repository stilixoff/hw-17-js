import React, { useState, useEffect } from 'react';

import './style.css';

function Timer(props) {
  
  const {time, steps, onTick, autostart} = props;
  

  const [inTime, setInTime] = useState(time)
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [step, setStep] = useState(steps*1000);
  const [autoStart, setAutoStart] = useState(autostart);

  function onStart() {
    setStart(true);
    setPause(false)
  }

  function onPause() {
    setPause(true);
    setStart(false);
  }
  
  if(start === true && inTime >= 1000 && pause === false) {
    setTimeout(() => {
        setInTime(inTime - step);
    }, step);
  } else if (autoStart === true && pause === false) {
    onStart();
    setInTime(time);
  }

  let widthLine = (inTime * 100 / time);

  useEffect(() => {
    
    setMinutes(Math.floor(inTime/60000));
    setSeconds(Math.floor((inTime%60000)/1000));

  });



  return (
    <div className="timer">
      <span className="titel">
        {minutes}
        :
        {seconds}
      </span>
      <div className="btn">
      <button 
        className = "startBtn"
        onClick={onStart}
      >
        Start
      </button>
      <button
        className = "pauseBtn"
        onClick={onPause}
      >
        Pause
      </button>
      </div>
      <div 
        className="progressBox">
        <div 
          style={{width: widthLine+"%"}}
          className="progressLine"
          >
            {Math.floor(widthLine)}%
          </div>
      </div>
    </div>
  );
}

export default Timer;