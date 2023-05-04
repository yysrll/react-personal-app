import React from "react";
import { useRoutes } from "react-router-dom";
import RouteMiddleware from "../middleware/RouteMiddleware";
import LoginPage from "../presentation/pages/LoginPage";
import RegisterPage from "../presentation/pages/RegisterPage";
import NotFoundPage from "../presentation/pages/NotFoundPage";

const AuthRoutes = () => useRoutes([
    {
        path:'/login',
        element:(
            <RouteMiddleware middleware="public">
                <LoginPage />
            </RouteMiddleware>
        )
    },
    {
        path:'/register',
        element:(
            <RouteMiddleware middleware="public">
                <RegisterPage />
            </RouteMiddleware>
        )
    },
    {
        path:'/*',
        element:(
            <RouteMiddleware middleware="auth">
                <NotFoundPage />
            </RouteMiddleware>
        )
    },
])

export default AuthRoutes