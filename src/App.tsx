import { Demo } from './components/Demo';
import { HowToUse } from './components/HowToUse';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="container">
        <Demo />
        <HowToUse />
        <div className="box">
          <p className="made-with-love">
            Made with 🖤 by <a href="https://github.com/diogomoretti">Diogo Moretti</a>. View on <a href="https://github.com/diogomoretti/use-time-of-day">Github</a>.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;