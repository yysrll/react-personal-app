import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function RouteMiddleware({ children, middleware}) {
    const { user } = useContext(UserContext)
    const currentUrl = useLocation()

    const listMiddleware = ['public', 'auth']

    if (!listMiddleware.includes(middleware)) {
        return <Navigate to='/login' state={{ from: currentUrl }} replace />
    }

    if (middleware === 'auth' && !user) {
        return <Navigate to='/login' state={{ from: currentUrl }} replace />
    }

    if (middleware === 'public' && user) {
        return <Navigate to='/' state={{ from: currentUrl }} replace />
    }

    return children
}

RouteMiddleware.propsType = {
    middleware: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default RouteMiddleware