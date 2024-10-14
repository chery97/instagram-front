import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './pages/style/global-style';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import './App.css';
import React from 'react';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

function App() {
    return (
        // QueryClientProvider로 감싸고, queryClient 인스턴스를 전달
        <QueryClientProvider client={queryClient}>
            <div className='App'>
                {/* Outlet은 react-router의 중첩된 경로를 렌더링 */}
                <Outlet />
                {/* Global 스타일 적용 */}
                <GlobalStyle />
            </div>
        </QueryClientProvider>
    );
}

export default App;
