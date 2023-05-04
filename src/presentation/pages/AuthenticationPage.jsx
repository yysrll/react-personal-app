import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NotFoundPage from "./NotFoundPage";

function AuthenticationPage() {
    return (
        <Routes>
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/*" element={ <NotFoundPage /> } />
        </Routes>
    )
}

export default AuthenticationPage