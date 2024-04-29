import App from "../App";
import Index from "../pages/member/login/index";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'member',
                element: <Index />,
            },
        ]
    },
    {
        path: 'member/login',
        element: <Index />,
    }
]);