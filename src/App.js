import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './pages/style/global-style';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Outlet />
            <GlobalStyle />
        </div>
    );
}

export default App;
