import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './HowToUse.css';

export function HowToUse() {
  return (
    <div className="box">
      <h2>How to Use</h2>
      
      <div className="instructions">
        <div className="instruction-block">
          <h3>1. Import the hook</h3>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {`import useTimeOfDay from 'use-time-of-day';`}
          </SyntaxHighlighter>
        </div>

        <div className="instruction-block">
          <h3>2. Use it in your component</h3>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {`function YourComponent() {
  // Use with default ranges
  const timeOfDay = useTimeOfDay();
  
  // Or with custom ranges
  const timeOfDay = useTimeOfDay({
    earlyMorning: { start: 0, end: 5 },
    morning: { start: 6, end: 11 },
    afternoon: { start: 12, end: 17 },
    evening: { start: 18, end: 20 },
    night: { start: 21, end: 23 },
  });
  
  return <div>It's {timeOfDay}!</div>;
}`}
            </SyntaxHighlighter>
        </div>

        <div className="instruction-block">
          <h3>Default ranges</h3>
          <ul className="return-values">
            <li><code>early morning</code> - 12 AM to 5:59 AM</li>
            <li><code>morning</code> - 6 AM to 11:59 AM</li>
            <li><code>afternoon</code> - 12 PM to 5:59 PM</li>
            <li><code>evening</code> - 6 PM to 7:59 PM</li>
            <li><code>night</code> - 8 PM to 11:59 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}