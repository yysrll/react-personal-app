import React from "react";
import TextField from '../components/TextFieldMdi';
import PrimaryButton from "../components/PrimaryButton";
import TextFieldPassword from "../components/TextFieldPassword";
import { Link } from "react-router-dom";
import AuthenticationLayout from "../layouts/AuthenticationLayout";

function LoginPage() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <AuthenticationLayout>
            <div className="text-3xl font-medium">
                Welcome Back
            </div>
            <div className="text-sm font-light text-secondary-gray">
                Login to create your notes
            </div>
            <TextField
                className=""
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
            />
            <TextFieldPassword
                className=""
                label="Password"
                value={password}
                onChange={setPassword}
            />
            <PrimaryButton className="w-full mt-8">
                Login
            </PrimaryButton>
            <div className="flex justify-center mt-6">
                Belum punya akun?
                <Link to="/register">
                    <p className="ms-2 text-primary">
                        Register
                    </p>
                </Link>
            </div>
        </AuthenticationLayout>
    )
}

export default LoginPage;