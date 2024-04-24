import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
            className="App-link"
            href="/member/login"
            rel="noopener noreferrer"
        >
          로그인
        </a>
      </header>
    </div>
  );
}

export default App;
