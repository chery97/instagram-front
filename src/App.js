import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './pages/style/global-style';

import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='App'>
                <Outlet />
                <GlobalStyle />
            </div>
        </QueryClientProvider>
    );
}

export default App;
