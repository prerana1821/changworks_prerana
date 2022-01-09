import './App.css';
import { GlobalHotKeys } from 'react-hotkeys';
import confetti from 'canvas-confetti';

function App() {

  const colors = ['#F50057', '#61dafb'];

  const keyMap = {
    test: "c h a n g w o r k s",
  }

  const handlers = {
    test: () => {
      confetti({ particleCount: 150, spread: 180, colors: colors });
    }
  }

  return (
    <div className="app">
      <GlobalHotKeys keyMap={ keyMap } handlers={ handlers } />
      <header className="header">
        <h1>
          Type "changworks"
        </h1>
        <p>to experience the magic ✨🎊</p>
      </header>
    </div>
  );
}

export default App;
