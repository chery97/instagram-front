import App from "../App";
import Index from "../pages/member/login/index";
import Register from "../pages/member/register/index";

import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'member/login',
                element: <Index />,
            },
            {
                path: 'member/register',
                element: <Register />,
            },
        ]
    },

]);