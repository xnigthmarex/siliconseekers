import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes((prevMinutes) => prevMinutes - 1);
          } else {
            resetTimer();
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <>
      <div className="Container">
        <div className="circle">
          <div className="text">
            <h>Task Time</h>
          </div>
          <div className="pomo_cont">
            <div className="item">Pomodoro</div>
            <div className="item">Break</div>
          </div>
          <div className="pomodoro-container">
            <div className="timer bigger-timer">
              {timerMinutes}:{timerSeconds}
            </div>
            <div>
              {!isRunning ? (
                <button onClick={startTimer} className="message transparent-button" style={{ marginRight: '10px' }}>Start</button>
              ) : (
                <button onClick={pauseTimer} className="message transparent-button" style={{ marginRight: '10px' }}>Pause</button>
              )}
              <button onClick={resetTimer} className="message transparent-button">Reset</button>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="text">
            <h>Task History</h>
          </div>
        </div>
      </div>
    </>
  );
}
