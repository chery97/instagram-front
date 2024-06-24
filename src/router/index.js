import App from "../App";
import MainFeed from "../pages/main";
import Index from "../pages/member/login/index";
import Register from "../pages/member/register/index";

import { createBrowserRouter } from "react-router-dom";
import ProfileView from "../pages/profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                path: 'member/login',
                element: <Index />,
            },
            {
                path: 'member/register',
                element: <Register />,
            },
            {
                path: 'main',
                element: <MainFeed />,
            },
            {
                path: 'profile/:memId',
                element: <ProfileView />,
            },
        ]
    },

]);