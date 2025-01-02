import useTimeOfDay from '../hooks/useTimeOfDay';
import { RoughNotation } from 'react-rough-notation';
import './Demo.css';

export function Demo() {
  const timeOfDay = useTimeOfDay();

  return (
    <div className={`time-of-day time-of-day--${timeOfDay}`}>
      <div className="box">
        <div className="demo-header">
          <h1>Current Time of Day</h1>
        </div>
        <p className="time-display">
          It's <RoughNotation
            type="highlight"
            color="#f2ffaa"
            show={true}
            animationDelay={1000}
            padding={[0, 3, 0, 8]}
          >
            {timeOfDay}&nbsp;
          </RoughNotation>
        </p>
      </div>
    </div>
  );
}