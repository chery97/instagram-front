import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Main from '@/pages/main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />,
            },
        ],
    }
]);