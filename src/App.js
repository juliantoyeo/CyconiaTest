import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modifier le <code>src/App.js</code> pour commencer l'exercice.
        </p>
        <br />
        <br />
        <a
          className="App-link"
          href="https://bitbucket.org/pldev/cyconia-test-front/src/master/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retourner sur l'énoncé de l'exercice
        </a>
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consulter la documentation de React
        </a>
      </header>
    </div>
  );
}

export default App;
