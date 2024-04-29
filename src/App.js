import './App.css';
import {Outlet} from "react-router-dom";

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
      <Outlet />
    </div>
  );
}

export default App;
