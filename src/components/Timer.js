import { useEffect, useState } from "react";
import { useFormatTime } from "../hooks/useFormatTime";
import Button from "./Button";

export default function Timer({ time, setTime }) {
  const [isCounterStart, setIsCounterStart] = useState(false);
  const { timeString } = useFormatTime(time);

  useEffect(() => {
    let counterInterval;
    if (isCounterStart) {
      counterInterval = setInterval(() => {
        if (time === 0) {
          clearInterval(counterInterval);
          setIsCounterStart(false);
        } else {
          setTime((prev) => Math.max(0, prev - 1));
        }
      }, 1000);
    }
    return () => clearInterval(counterInterval);
  }, [time, isCounterStart, setTime]);

  const toggleCounter = () => {
    if (isNaN(time)) return alert("Please Enter Minute First!");
    setIsCounterStart((prev) => !prev);
  };

  const resetCounter = () => {
    setIsCounterStart(false);
    setTime(0);
  };

  return (
    <div className="container">
      <Button
        onClick={toggleCounter}
        icon={isCounterStart ? "fa-pause" : "fa-play"}
        tipText={isCounterStart ? "Stop" : "Start"}
      />
      <div className="timer">{timeString}</div>
      <Button icon="fa-arrows-rotate" onClick={resetCounter} tipText="Reset" />
    </div>
  );
}
