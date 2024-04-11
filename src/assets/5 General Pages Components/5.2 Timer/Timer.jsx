import { useEffect, useState } from 'react';
import './Timer.scss';

// '2024-11-28T10:27:00'

const Timer = (props) => {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    timeCalculation();

    const timer = setInterval(timeCalculation, 1000);

    if (stopTimer) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [stopTimer]);

  function timeCalculation() {
    const milSeconds = new Date(props.deadline) - new Date();

    if (milSeconds < 0) {
      setStopTimer(true);
      setTime({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      });
      return;
    }

    const days = Math.floor(milSeconds / (24 * 3600 * 1000));
    const hours = Math.floor((milSeconds / (3600 * 1000)) % 24);
    const minutes = Math.floor((milSeconds / 1000 / 60) % 60);
    const seconds = Math.floor((milSeconds / 1000) % 60);

    setTime({
      days: days < 10 ? `0${days}` : days,
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    });
  }

  return (
    <div className="timer">
      <p className="timer_title">Until the end of the promotion:</p>
      <div className="timer_contaner">
        <div className="timer_contaner_block">
          <span className="timer_contaner_block_num timer_days">{time.days}</span>
          Days
        </div>
        <div className="timer_contaner_block">
          <span className="timer_contaner_block_num timer_hours">{time.hours}</span>
          Hours
        </div>
        <div className="timer_contaner_block">
          <span className="timer_contaner_block_num timer_minutes">{time.minutes}</span>
          Minutes
        </div>
        <div className="timer_contaner_block">
          <span className="timer_contaner_block_num timer_seconds">{time.seconds}</span>
          Seconds
        </div>
      </div>
    </div>
  );
};

export default Timer;
